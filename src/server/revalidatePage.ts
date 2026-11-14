"use server";

import { revalidatePath } from "next/cache";

export const revalidatePage = async () => {
  revalidatePath("/", "page");
  revalidatePath("/profile", "page");
  revalidatePath("/login", "page");
  revalidatePath("/register", "page");
  revalidatePath("/profile/edit-user", "page");
};
