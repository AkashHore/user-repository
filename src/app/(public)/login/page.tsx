import LoginForm from "@/components/Forms/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | User-Repository",
  description: "Login Page of User-repository",
};

const page = () => {
  return (
    <>
      <section className="grid h-dvh place-items-center">
        <Card className="w-sm">
          <CardHeader>
            <CardTitle className="text-center text-3xl">Register</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent>
            <LoginForm />
          </CardContent>

          <CardFooter className="items-center justify-center gap-1">
            Don&apos;t have an account?
            <Link
              className="text-blue-700"
              href={"/register"}>
              Register
            </Link>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default page;
