import React from "react";
import { notFound } from "next/navigation";
import { getTaskById } from "@/lib/db-judge";
import { SplitWorkspace } from "@/components/workspace/SplitWorkspace";

export const revalidate = 0; // dynamic

export default async function TaskWorkspacePage({
  params,
}: {
  params: { id: string };
}) {
  const task = await getTaskById(params.id);

  if (!task) {
    notFound();
  }

  return <SplitWorkspace task={task} />;
}
