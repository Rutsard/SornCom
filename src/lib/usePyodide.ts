"use client";

// ==============================================================================
// Client-Side Pyodide Hook (WebAssembly Python 3.12 Engine)
// Runs instant sample testing directly in the camper's browser without backend latency
// Dynamically loads numpy / scipy / pandas for Engineering track!
// ==============================================================================

import { useState, useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<any>;
    pyodideInstance?: any;
  }
}

const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

export interface PyodideRunResult {
  stdout: string;
  stderr: string;
  executionTimeMs: number;
  success: boolean;
  error?: string;
}

export function usePyodide() {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Pyodide Idle");
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function initPyodide() {
      if (typeof window === "undefined") return;

      if (window.pyodideInstance) {
        pyodideRef.current = window.pyodideInstance;
        setIsReady(true);
        setStatusMessage("Python WASM Ready");
        return;
      }

      setIsLoading(true);
      setStatusMessage("Loading WebAssembly Python Runtime...");

      // Inject Pyodide script if not present
      if (!document.getElementById("pyodide-script")) {
        const script = document.createElement("script");
        script.id = "pyodide-script";
        script.src = `${PYODIDE_CDN}pyodide.js`;
        script.async = true;
        document.body.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = () => reject(new Error("Failed to load Pyodide script"));
        });
      }

      try {
        if (!window.loadPyodide) {
          throw new Error("window.loadPyodide is not defined");
        }

        const pyodide = await window.loadPyodide({
          indexURL: PYODIDE_CDN,
        });

        if (isMounted) {
          pyodideRef.current = pyodide;
          window.pyodideInstance = pyodide;
          setIsReady(true);
          setIsLoading(false);
          setStatusMessage("Python WASM Ready (In-Browser Execution)");
        }
      } catch (err) {
        if (isMounted) {
          setIsLoading(false);
          setStatusMessage(`Pyodide load failed: ${(err as Error).message}`);
          console.error("Pyodide initialization error:", err);
        }
      }
    }

    initPyodide();

    return () => {
      isMounted = false;
    };
  }, []);

  const runCode = useCallback(
    async (code: string, stdinText = ""): Promise<PyodideRunResult> => {
      if (!pyodideRef.current) {
        return {
          stdout: "",
          stderr: "Pyodide WebAssembly is still initializing. Please wait a moment...",
          executionTimeMs: 0,
          success: false,
          error: "Runtime not ready",
        };
      }

      const pyodide = pyodideRef.current;
      const startTime = performance.now();

      // Check if code requires numpy or pandas
      if (code.includes("import numpy") || code.includes("from numpy")) {
        setStatusMessage("Loading numpy package for Engineering Track...");
        await pyodide.loadPackage("numpy");
        setStatusMessage("Python WASM Ready");
      }
      if (code.includes("import pandas") || code.includes("from pandas")) {
        setStatusMessage("Loading pandas package...");
        await pyodide.loadPackage("pandas");
        setStatusMessage("Python WASM Ready");
      }

      // Safe Python execution wrapper that redirects stdin and stdout
      const runnerCode = `
import sys
import io

_stdin_backup = sys.stdin
_stdout_backup = sys.stdout
_stderr_backup = sys.stderr

sys.stdin = io.StringIO(${JSON.stringify(stdinText)})
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

_err = None
try:
${code
  .split("\n")
  .map((line) => "    " + line)
  .join("\n")}
except Exception as e:
    import traceback
    traceback.print_exc(file=sys.stderr)
finally:
    _captured_stdout = sys.stdout.getvalue()
    _captured_stderr = sys.stderr.getvalue()
    sys.stdin = _stdin_backup
    sys.stdout = _stdout_backup
    sys.stderr = _stderr_backup
`;

      try {
        await pyodide.runPythonAsync(runnerCode);
        const stdout = pyodide.globals.get("_captured_stdout") || "";
        const stderr = pyodide.globals.get("_captured_stderr") || "";
        const elapsed = Math.round(performance.now() - startTime);

        return {
          stdout: String(stdout),
          stderr: String(stderr),
          executionTimeMs: elapsed,
          success: !stderr,
        };
      } catch (err) {
        const elapsed = Math.round(performance.now() - startTime);
        return {
          stdout: "",
          stderr: (err as Error).message,
          executionTimeMs: elapsed,
          success: false,
          error: (err as Error).message,
        };
      }
    },
    []
  );

  return {
    isReady,
    isLoading,
    statusMessage,
    runCode,
  };
}
