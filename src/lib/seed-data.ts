// ==============================================================================
// Seed Data: POSN Camp 1 and University Engineering ComProg Tracks
// ==============================================================================

export interface TaskSeed {
  id: string;
  title: string;
  slug: string;
  trackId: "POSN-Camp-1" | "Eng-ComProg";
  difficulty: "EASY" | "MEDIUM" | "HARD";
  timeLimitMs: number;
  memoryLimitMb: number;
  tags: string[];
  statementMarkdown: string;
  inputFormat: string;
  outputFormat: string;
  sampleInput: string;
  sampleOutput: string;
  constraints: string;
  hints: string;
  starterCode: string;
  hasTracingQuiz: boolean;
  tracingSnippet?: string;
  tracingQuestion?: string;
  tracingExpectedOutput?: string;
  tracingExplanation?: string;
  testCases: {
    input: string;
    expectedOutput: string;
    isSample: boolean;
    scoreWeight: number;
  }[];
}

export const TRACKS_SEED = [
  {
    id: "POSN-Camp-1",
    title: "POSN Computer Camp 1",
    subtitle: "สอวน. คอมพิวเตอร์ ค่าย 1",
    description: "Algorithmic thinking, discrete math, standard I/O optimization, loops, recursion, and paper-based code tracing.",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    iconName: "Binary",
    order: 1,
  },
  {
    id: "Eng-ComProg",
    title: "University Engineering ComProg",
    subtitle: "คอมพิวเตอร์และโปรแกรมมิ่งสำหรับวิศวกร",
    description: "Numerical analysis, sensor data processing, NumPy/SciPy array operations, file I/O, and applied engineering simulations.",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    iconName: "Cpu",
    order: 2,
  },
];

export const TASKS_SEED: TaskSeed[] = [
  {
    id: "0001",
    title: "A+B & Modulo Magic",
    slug: "posn-0001-a-plus-b-modulo",
    trackId: "POSN-Camp-1",
    difficulty: "EASY",
    timeLimitMs: 1000,
    memoryLimitMb: 64,
    tags: ["I/O", "Math", "Modulo", "POSN-Camp-1", "Number Theory"],
    statementMarkdown: `### Description
ยินดีต้อนรับสู่นักเรียน **สอวน. คอมพิวเตอร์ ค่าย 1**! 

โจทย์ข้อนี้ออกแบบเพื่อทดสอบพื้นฐาน **Standard I/O** และการดำเนินการทางคณิตศาสตร์แบบ **Modular Arithmetic** ซึ่งเป็นหัวใจสำคัญของการเขียนโปรแกรมแข่งขันและการคำนวณทางทฤษฎีจำนวน

กำหนดจำนวนเต็มบวก 3 จำนวนได้แก่ $A$, $B$, และ $M$ ให้ท่านเขียนโปรแกรมเพื่อคำนวณผลลัพธ์ต่อไปนี้:
1. $(A + B) \\pmod{M}$
2. $(A \\times B) \\pmod{M}$
3. $(A^B) \\pmod{M}$

> **คำเตือนสำหรับค่าย 1:** $A$ และ $B$ อาจมีค่ามหาศาล ($10^{18}$) ห้ามใช้การคูณตรงๆ ในการหา $A^B$ เพราะจะทำให้ Time Limit Exceeded ($T$) หรือ Memory Exceeded ให้ใช้ Modular Exponentiation หรือฟังก์ชันในตัวของ Python เช่น \`pow(A, B, M)\``,
    inputFormat: `บรรทัดเดียวประกอบด้วยจำนวนเต็มบวก 3 จำนวน $A, B, M$ คั่นด้วยช่องว่าง`,
    outputFormat: `พิมพ์จำนวนเต็ม 3 จำนวนคั่นด้วยช่องว่าง: ผลบวกม็อด $M$, ผลคูณม็อด $M$, และผลยกกำลังม็อด $M$ ตามลำดับ`,
    sampleInput: `3 4 5`,
    sampleOutput: `2 2 1`,
    constraints: `* $1 \\le A, B \\le 10^{18}$
* $1 \\le M \\le 10^9 + 7$
* Time Limit: 1.0 วินาที
* Memory Limit: 64 MB`,
    hints: `ในภาษา Python 3 ฟังก์ชัน \`pow(base, exp, mod)\` ใช้เวลา $O(\\log(\\text{exp}))$ ซึ่งมีประสิทธิภาพสูงมากและปลอดภัยจากข้อจำกัดเวลา`,
    starterCode: `import sys

def solve():
    # Read space-separated integers from stdin
    line = sys.stdin.read().split()
    if not line:
        return
    a = int(line[0])
    b = int(line[1])
    m = int(line[2])
    
    # 1. (A + B) mod M
    sum_mod = (a + b) % m
    
    # 2. (A * B) mod M
    prod_mod = (a * b) % m
    
    # 3. (A ^ B) mod M using modular exponentiation
    pow_mod = pow(a, b, m)
    
    print(f"{sum_mod} {prod_mod} {pow_mod}")

if __name__ == "__main__":
    solve()
`,
    hasTracingQuiz: true,
    tracingSnippet: `a = 15
b = 4
c = (a // b) * 3 + (a % b)
if c > 10:
    ans = c * 2
else:
    ans = c + 5
print(ans)`,
    tracingQuestion: `พิจารณาโค้ดด้านบน จงหาค่าผลลัพธ์ที่จะถูกพิมพ์ออกมาที่หน้าจอ (Standard Output) โดยห้ามรันโค้ด (เสมือนสอบข้อเขียนค่าย 1)`,
    tracingExpectedOutput: `24`,
    tracingExplanation: `การไล่โค้ด (Trace):
1. a = 15, b = 4
2. a // b ได้ผลลัพธ์ 3 (การหารปัดเศษลง)
3. (3 * 3) = 9
4. a % b คือ 15 % 4 = 3 (เศษจากการหาร)
5. ดังนั้น c = 9 + 3 = 12
6. เงื่อนไข c > 10 เป็นจริง (12 > 10)
7. ans = c * 2 = 12 * 2 = 24`,
    testCases: [
      { input: "3 4 5", expectedOutput: "2 2 1", isSample: true, scoreWeight: 10 },
      { input: "10 20 7", expectedOutput: "2 4 2", isSample: true, scoreWeight: 10 },
      { input: "1 1 1000", expectedOutput: "2 1 1", isSample: false, scoreWeight: 10 },
      { input: "999999999 999999999 1000000007", expectedOutput: "999999991 64 266078474", isSample: false, scoreWeight: 10 },
      { input: "2 10 1000", expectedOutput: "12 20 24", isSample: false, scoreWeight: 10 },
      { input: "123456789 987654321 100000007", expectedOutput: "11111033 77351694 86456490", isSample: false, scoreWeight: 10 },
      { input: "5 13 17", expectedOutput: "1 14 3", isSample: false, scoreWeight: 10 },
      { input: "7 3 13", expectedOutput: "10 8 5", isSample: false, scoreWeight: 10 },
      { input: "1000000000000 1000000000000 1000000009", expectedOutput: "999982009 81000000 73266884", isSample: false, scoreWeight: 10 },
      { input: "2 1000000 1000000007", expectedOutput: "1000002 2000000 235042059", isSample: false, scoreWeight: 10 },
    ],
  },
  {
    id: "ENG01",
    title: "Sensor Data Array",
    slug: "eng-01-sensor-data-array",
    trackId: "Eng-ComProg",
    difficulty: "MEDIUM",
    timeLimitMs: 1500,
    memoryLimitMb: 128,
    tags: ["Array", "NumPy", "Engineering", "Data Processing", "Eng-ComProg"],
    statementMarkdown: `### Description
สำหรับวิศวกรคอมพิวเตอร์และระบบควบคุม (Engineering ComProg):

ในการเก็บข้อมูลจากเซนเซอร์ IoT อุตสาหกรรม มักเกิดสัญญาณรบกวน (Noise & Outliers) ที่เบี่ยงเบนจากค่าความเป็นจริงอย่างมีนัยสำคัญ

ให้นักศึกษาเขียนโปรแกรมประมวลผลข้อมูลเซนเซอร์:
1. คำนวณค่าเฉลี่ยตัวอย่าง (Mean: $\\mu$) และส่วนเบี่ยงเบนมาตรฐาน (Sample Std: $\\sigma$) ของข้อมูลทั้งหมด
2. กรองข้อมูลที่ถือว่าเป็น Outlier ทิ้ง โดยกำหนดช่วงข้อมูลปกติคือ $[\\mu - 2\\sigma, \\mu + 2\\sigma]$
3. ทำการ **Min-Max Normalization** ข้อมูลที่ถูกต้องให้ตกอยู่ในช่วง $[0.00, 1.00]$:
$$x_{\\text{norm}} = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}$$
4. แสดงผลจำนวนข้อมูลที่ถูกต้อง, ค่าเฉลี่ยของข้อมูลหลังกรอง, และชุดข้อมูลที่ Normalized แล้ว`,
    inputFormat: `บรรทัดแรก: จำนวนเต็ม $N$ ($3 \\le N \\le 10^5$)
บรรทัดที่สอง: จำนวนทศนิยม $N$ จำนวนคั่นด้วยช่องว่าง`,
    outputFormat: `บรรทัดที่ 1: \`Valid: <จำนวนข้อมูลที่ผ่านการกรอง>\`
บรรทัดที่ 2: \`Mean: <ค่าเฉลี่ยทศนิยม 2 ตำแหน่ง>\`
บรรทัดที่ 3: ข้อมูล Normalized ทศนิยม 2 ตำแหน่ง คั่นด้วยช่องว่าง`,
    sampleInput: `6
10.0 10.5 9.8 10.2 10.1 50.0`,
    sampleOutput: `Valid: 5
Mean: 10.12
0.29 1.00 0.00 0.57 0.43`,
    constraints: `* $3 \\le N \\le 10^5$
* ค่าของเซนเซอร์เป็นจำนวนจริง $0.0 \\le x \\le 10^4$
* ในกรณีที่ $x_{\\max} == x_{\\min}$ ให้ค่า Normalized ทั้งหมดเป็น 0.00
* สามารถใช้ไลบรารี \`numpy\` หรือฟังก์ชันมาตรฐานของ Python ก็ได้`,
    hints: `สูตร Sample Standard Deviation:
$$\\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N - 1}}$$
ปัดเศษทศนิยม 2 ตำแหน่งด้วย \`{val:.2f}\``,
    starterCode: `import sys
import math

def solve():
    raw_input = sys.stdin.read().split()
    if not raw_input:
        return
    
    n = int(raw_input[0])
    data = [float(x) for x in raw_input[1:n+1]]
    
    # Step 1: Compute Mean and Sample Std
    mean = sum(data) / n
    var = sum((x - mean) ** 2 for x in data) / (n - 1)
    std = math.sqrt(var)
    
    lower_bound = mean - 2 * std
    upper_bound = mean + 2 * std
    
    # Step 2: Filter inliers
    valid = [x for x in data if lower_bound <= x <= upper_bound]
    valid_count = len(valid)
    valid_mean = sum(valid) / valid_count if valid_count > 0 else 0.0
    
    # Step 3: Min-Max Normalization
    min_val = min(valid)
    max_val = max(valid)
    
    if max_val == min_val:
        norm = [0.00 for _ in valid]
    else:
        norm = [(x - min_val) / (max_val - min_val) for x in valid]
        
    # Output formatting
    print(f"Valid: {valid_count}")
    print(f"Mean: {valid_mean:.2f}")
    print(" ".join(f"{x:.2f}" for x in norm))

if __name__ == "__main__":
    solve()
`,
    hasTracingQuiz: true,
    tracingSnippet: `sensor_matrix = [
    [12.5, 14.0, 11.2],
    [10.1, 15.3, 13.8],
    [9.5, 16.0, 12.0]
]

# Extract diagonal sensor elements
diag = [sensor_matrix[i][i] for i in range(3)]
avg_diag = sum(diag) / len(diag)
print(f"{avg_diag:.1f}")`,
    tracingQuestion: `จงทำนายผลลัพธ์ของค่าเฉลี่ยตามแนวทแยงมุมหลัก (Main Diagonal) ของ sensor_matrix ที่ถูกพิมพ์ออกมา`,
    tracingExpectedOutput: `13.3`,
    tracingExplanation: `1. แนวทแยงหลักคือตำแหน่ง [0][0], [1][1], [2][2]
2. sensor_matrix[0][0] = 12.5
3. sensor_matrix[1][1] = 15.3
4. sensor_matrix[2][2] = 12.0
5. ผลรวม = 12.5 + 15.3 + 12.0 = 39.8
6. ค่าเฉลี่ย = 39.8 / 3 = 13.2666...
7. จัดรูปแบบ .1f ปัดเป็น 13.3`,
    testCases: [
      {
        input: "6\n10.0 10.5 9.8 10.2 10.1 50.0",
        expectedOutput: "Valid: 5\nMean: 10.12\n0.29 1.00 0.00 0.57 0.43",
        isSample: true,
        scoreWeight: 20,
      },
      {
        input: "4\n5.0 5.0 5.0 5.0",
        expectedOutput: "Valid: 4\nMean: 5.00\n0.00 0.00 0.00 0.00",
        isSample: false,
        scoreWeight: 20,
      },
      {
        input: "5\n2.0 4.0 6.0 8.0 10.0",
        expectedOutput: "Valid: 5\nMean: 6.00\n0.00 0.25 0.50 0.75 1.00",
        isSample: false,
        scoreWeight: 20,
      },
      {
        input: "7\n100.0 102.0 98.0 101.0 99.0 100.5 500.0",
        expectedOutput: "Valid: 6\nMean: 100.08\n0.50 1.00 0.00 0.75 0.25 0.62",
        isSample: false,
        scoreWeight: 20,
      },
      {
        input: "8\n12.0 12.5 11.5 12.2 11.8 12.1 12.3 80.0",
        expectedOutput: "Valid: 7\nMean: 12.06\n0.50 1.00 0.00 0.70 0.30 0.60 0.80",
        isSample: false,
        scoreWeight: 20,
      },
    ],
  },
];
