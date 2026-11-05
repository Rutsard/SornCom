// ==============================================================================
// Dual-Database Seeding Script for Online Judge & Learning Platform
// Populates core_db (Tracks, Users, Lessons) & judge_db (Tasks, TestCases)
// ==============================================================================

import { PrismaClient as CorePrismaClient } from "../src/generated/core";
import { PrismaClient as JudgePrismaClient, Difficulty } from "../src/generated/judge";
import { TRACKS_SEED, TASKS_SEED } from "../src/lib/seed-data";

const corePrisma = new CorePrismaClient();
const judgePrisma = new JudgePrismaClient();

async function main() {
  console.log("🚀 Starting database seeding for Dual-DB Architecture...");

  // ----------------------------------------------------------------------------
  // 1. Seed Core Database (core_db)
  // ----------------------------------------------------------------------------
  try {
    console.log("📦 Seeding core_db (Tracks, Users, Lessons)...");

    // Create Tracks
    for (const track of TRACKS_SEED) {
      await corePrisma.track.upsert({
        where: { id: track.id },
        update: {
          title: track.title,
          subtitle: track.subtitle,
          description: track.description,
          badgeColor: track.badgeColor,
          iconName: track.iconName,
          order: track.order,
        },
        create: {
          id: track.id,
          title: track.title,
          subtitle: track.subtitle,
          description: track.description,
          badgeColor: track.badgeColor,
          iconName: track.iconName,
          order: track.order,
        },
      });
      console.log(`   ✔ Track seeded: ${track.id} (${track.title})`);
    }

    // Create Default Demonstration User
    const demoUser = await corePrisma.user.upsert({
      where: { email: "posn.student@programming.in.th" },
      update: {},
      create: {
        email: "posn.student@programming.in.th",
        username: "posn_camper01",
        fullName: "สมชาย มุ่งสู่ค่ายหนึ่ง (Somchai Camp1)",
        passwordHash: "$2b$10$demo_hash_not_for_real_auth_here",
        currentTrack: "POSN-Camp-1",
      },
    });
    console.log(`   ✔ Demo User seeded: ${demoUser.username} (${demoUser.id})`);

    // Initialize User Progress
    for (const track of TRACKS_SEED) {
      await corePrisma.userProgress.upsert({
        where: {
          userId_trackId: {
            userId: demoUser.id,
            trackId: track.id,
          },
        },
        update: {},
        create: {
          userId: demoUser.id,
          trackId: track.id,
          totalSolvedTasks: 0,
          totalPoints: 0,
        },
      });
    }

    console.log("✅ core_db seeded successfully.");
  } catch (err) {
    console.warn("⚠️ Warning: core_db seeding skipped or connection failed:", (err as Error).message);
    console.warn("   (Will fallback gracefully to in-memory seed data during local dev without PostgreSQL)");
  }

  // ----------------------------------------------------------------------------
  // 2. Seed Judge Database (judge_db)
  // ----------------------------------------------------------------------------
  try {
    console.log("⚖️ Seeding judge_db (Problem Statements, TestCases, Quizzes)...");

    for (const taskData of TASKS_SEED) {
      const { testCases, ...taskFields } = taskData;

      // Upsert Task
      await judgePrisma.task.upsert({
        where: { id: taskFields.id },
        update: {
          title: taskFields.title,
          slug: taskFields.slug,
          trackId: taskFields.trackId,
          difficulty: taskFields.difficulty as Difficulty,
          timeLimitMs: taskFields.timeLimitMs,
          memoryLimitMb: taskFields.memoryLimitMb,
          tags: taskFields.tags,
          statementMarkdown: taskFields.statementMarkdown,
          inputFormat: taskFields.inputFormat,
          outputFormat: taskFields.outputFormat,
          sampleInput: taskFields.sampleInput,
          sampleOutput: taskFields.sampleOutput,
          constraints: taskFields.constraints,
          hints: taskFields.hints,
          hasTracingQuiz: taskFields.hasTracingQuiz,
          tracingSnippet: taskFields.tracingSnippet,
          tracingQuestion: taskFields.tracingQuestion,
          tracingExpectedOutput: taskFields.tracingExpectedOutput,
          tracingExplanation: taskFields.tracingExplanation,
        },
        create: {
          id: taskFields.id,
          title: taskFields.title,
          slug: taskFields.slug,
          trackId: taskFields.trackId,
          difficulty: taskFields.difficulty as Difficulty,
          timeLimitMs: taskFields.timeLimitMs,
          memoryLimitMb: taskFields.memoryLimitMb,
          tags: taskFields.tags,
          statementMarkdown: taskFields.statementMarkdown,
          inputFormat: taskFields.inputFormat,
          outputFormat: taskFields.outputFormat,
          sampleInput: taskFields.sampleInput,
          sampleOutput: taskFields.sampleOutput,
          constraints: taskFields.constraints,
          hints: taskFields.hints,
          hasTracingQuiz: taskFields.hasTracingQuiz,
          tracingSnippet: taskFields.tracingSnippet,
          tracingQuestion: taskFields.tracingQuestion,
          tracingExpectedOutput: taskFields.tracingExpectedOutput,
          tracingExplanation: taskFields.tracingExplanation,
        },
      });

      // Clear existing test cases for idempotency
      await judgePrisma.testCase.deleteMany({
        where: { taskId: taskFields.id },
      });

      // Insert Test Cases
      for (let i = 0; i < testCases.length; i++) {
        const tc = testCases[i];
        await judgePrisma.testCase.create({
          data: {
            taskId: taskFields.id,
            order: i + 1,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            isSample: tc.isSample,
            scoreWeight: tc.scoreWeight,
          },
        });
      }

      console.log(`   ✔ Task seeded: [${taskFields.id}] ${taskFields.title} with ${testCases.length} test cases`);
    }

    console.log("✅ judge_db seeded successfully.");
  } catch (err) {
    console.warn("⚠️ Warning: judge_db seeding skipped or connection failed:", (err as Error).message);
    console.warn("   (Will fallback gracefully to in-memory seed data during local dev without PostgreSQL)");
  }

  console.log("🎉 Seeding routine complete!");
}

main()
  .then(async () => {
    await corePrisma.$disconnect();
    await judgePrisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await corePrisma.$disconnect();
    await judgePrisma.$disconnect();
    process.exit(1);
  });
