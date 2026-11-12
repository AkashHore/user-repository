import { Card, CardContent } from "@/components/shadcnui/card";
import UserCard from "@/components/UserCard";
import { auth } from "@/lib/auth";
import prisma from "@/lib/dbClient/prisma";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "User-Repository",
  description: "Home Page of User-repository",
};

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const allusers = await prisma.user.findMany();

  if (allusers.length === 0) {
    return (
      <section className="grid h-dvh place-items-center">
        <Card>
          <CardContent className="text-2xl">No Users Found 😶‍🌫️</CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 place-items-center gap-8 px-3 pt-20 pb-8 md:grid-cols-2 lg:grid-cols-3">
      {allusers.map((item) => (
        <UserCard
          key={item.id}
          ucData={item}
          currentUserId={session?.user?.id}
        />
      ))}
    </section>
  );
};

export default page;
