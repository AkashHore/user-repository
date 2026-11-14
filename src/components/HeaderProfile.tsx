import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import ThemeToggleButton from "./Layout/ThemeToggleButton";
import LogOutButton from "./LogOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";

const HeaderProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <section className="flex items-center justify-center gap-2">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <ThemeToggleButton />
      </section>
    );
  }

  const { name, image } = session.user;

  const nameParts = name.trim().split(/\s+/);

  const nameFallback = `${nameParts[0].charAt(0).toUpperCase()} ${nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : ""}`;

  return (
    <section className="flex items-center justify-center gap-6">
      <ThemeToggleButton />
      <Link href={"/profile"}>
        <Avatar className="size-8">
          {image && <AvatarImage src={`/${image}`} />}
          <AvatarFallback className="">{nameFallback}</AvatarFallback>
        </Avatar>
      </Link>
      <LogOutButton />
    </section>
  );
};

export default HeaderProfile;
