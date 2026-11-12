import LogOutButton from "@/components/LogOutButton";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcnui/avatar";
import { buttonVariants } from "@/components/shadcnui/button";
import { auth } from "@/lib/auth";
import { PenBox } from "lucide-react";
import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile | User-Repository",
  description: "Profile Page of User-repository",
};

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/login");
  }

  const { name, email, image } = session.user;

  const nameParts = name.trim().split(/\s+/);

  // const firstName = nameParts[0].charAt(0).toUpperCase();

  // const lastName = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : "";

  const nameFallback = `${nameParts[0].charAt(0).toUpperCase()} ${nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : ""}`;
  return (
    <section className="grid place-items-center gap-4 pt-34 pb-20">
      <Avatar className="size-64">
        {image && <AvatarImage src={`/${image}`} />}
        <AvatarFallback className="text-3xl">{nameFallback}</AvatarFallback>
      </Avatar>

      <div className="text-3xl">Welcome</div>
      <div className="text-4xl font-semibold">{name}👋🏻</div>
      <div className=" ">{email}</div>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href={"/profile/edit-user"}
          className={buttonVariants({ variant: "outline", size: "lg" })}>
          <PenBox /> Update Profile
        </Link>
        <LogOutButton />
      </div>
    </section>
  );
};

export default page;
