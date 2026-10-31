import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcnui/avatar";
import { buttonVariants } from "@/components/shadcnui/button";
import { PenBox, Power } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile | User-Repository",
  description: "Profile Page of User-repository",
};

const page = () => {
  return (
    <section className="grid place-items-center gap-4 pt-34 pb-20">
      <Avatar className="size-64">
        <AvatarImage
          src={""}
          alt="@shadcn"
          className="grayscale"
        />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>

      <div className="text-3xl">Welcome</div>
      <div className="text-4xl font-semibold">ABCD XYZ</div>
      <div className=" ">email@gmail.com</div>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href={"/profile/edit-user"}
          className={buttonVariants({ variant: "outline", size: "lg" })}>
          <PenBox /> Edit
        </Link>
        <Link
          href={"/"}
          className={buttonVariants({ variant: "destructive", size: "lg" })}>
          <Power /> Logout
        </Link>
      </div>
    </section>
  );
};

export default page;
