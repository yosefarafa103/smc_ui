"use server";

import { HOSTED_API_LINK } from "@/utils/variables";
import { revalidatePath, revalidateTag } from "next/cache";

export async function mutateData(id: string, e: FormData) {
  const data = {
    tn: e.get("tn"),
    mill: e.get("mill"),
    startDate: e.get("startDate"),
    stopDate: e.get("stopDate"),
    carryOutBy: e.get("carryOutBy"),
    description: e.get("description"),
    stopCategory: e.get("stopCategory"),
  };
  await fetch(`${HOSTED_API_LINK}/mill/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    next: {
      tags: Object.keys(data),
    },
  });
  // revalidatePath("/data-report");
  //
  console.log("updated successfully!");
}
