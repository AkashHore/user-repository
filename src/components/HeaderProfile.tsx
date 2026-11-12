import { auth } from "@/lib/auth";
import { User2Icon } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";

const HeaderProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <Link href={"/profile"}>
        <Avatar className="size-10">
          <AvatarFallback className="">
            <User2Icon />
          </AvatarFallback>
        </Avatar>
      </Link>
    );
  }

  const { name, image } = session.user;

  const nameParts = name.trim().split(/\s+/);

  // const firstName = nameParts[0].charAt(0).toUpperCase();

  // const lastName = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : "";

  const nameFallback = `${nameParts[0].charAt(0).toUpperCase()} ${nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : ""}`;

  return (
    <Link href={"/profile"}>
      <Avatar className="size-14">
        {image && <AvatarImage src={`/${image}`} />}
        <AvatarFallback className="">{nameFallback}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default HeaderProfile;
