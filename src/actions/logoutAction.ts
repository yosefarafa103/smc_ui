"use server";

import { HOSTED_API_LINK } from "@/utils/variables";

export async function logout() {
  await fetch(`${HOSTED_API_LINK}/users/logout`);
}
