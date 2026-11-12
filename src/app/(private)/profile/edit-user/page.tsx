import UpdateAvatar from "@/components/Forms/UpdateAvatar";
import UpdateName from "@/components/Forms/UpdateName";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit-Profile | User-Repository",
  description: "Profile Edit Page of User-repository",
};

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/login");
  }

  const { image, name } = session.user;
  return (
    <>
      <section className="grid place-items-center space-y-6 pt-34 pb-20">
        <Card className="w-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Update Your Avatar
            </CardTitle>
          </CardHeader>

          <UpdateAvatar imgUrl={image} />
        </Card>

        <Card className="w-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Update Your Name
            </CardTitle>
          </CardHeader>

          <UpdateName prevName={name} />
        </Card>
      </section>
    </>
  );
};

export default page;
