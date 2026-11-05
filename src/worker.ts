// ==============================================================================
// Standalone Judge Worker Daemon
// Continuous polling loop on Redis queue "judge:queue"
// Fetches test cases from judge_db, runs sandbox execution, and records verdicts
// ==============================================================================

import { dequeueGradingJob } from "./lib/redis";
import { processGradingJob } from "./lib/judge-engine";

let isRunning = true;

async function startWorker() {
  console.log("=================================================");
  console.log("🚀 Programming.in.th Auto-Grader Worker Started");
  console.log("   Listening for grading jobs on Redis queue...");
  console.log("=================================================");

  while (isRunning) {
    try {
      const job = await dequeueGradingJob(2);
      if (job) {
        console.log(`\n📥 [Worker] Received grading job ${job.submissionId} for Task ${job.taskId}`);
        console.log(`   User: ${job.userId} | Language: Python 3`);

        const start = performance.now();
        const result = await processGradingJob(job);
        const duration = Math.round(performance.now() - start);

        console.log(`   ✔ Verdict: ${result.verdictString} | Score: ${result.score}/100 | Time: ${duration}ms`);
      }
    } catch (err) {
      console.error("   ❌ [Worker Error]", (err as Error).message);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n🛑 Stopping worker daemon...");
  isRunning = false;
  process.exit(0);
});

startWorker().catch((err) => {
  console.error("Fatal worker error:", err);
  process.exit(1);
});
