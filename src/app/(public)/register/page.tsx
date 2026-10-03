import RegisterForm from "@/components/Forms/RegisterForm";
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
  title: "Register | User-Repository",
  description: "Register Page of User-repository",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Register</CardTitle>
        </CardHeader>

        <Separator />

        <CardContent>
          <RegisterForm />
        </CardContent>

        <CardFooter className="gap-1">
          Don&apos;t have an account?
          <Link
            className="text-blue-700"
            href={"/login"}>
            Login
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
