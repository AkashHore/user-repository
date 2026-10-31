import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./shadcnui/card";

const UserCard = () => {
  return (
    <Card className="my-4 w-xs">
      <CardHeader className="grid w-full place-items-center gap-4">
        <Avatar className="size-64">
          <AvatarImage
            src={""}
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="">
          <CardTitle className="text-center text-2xl">
            <Link href={"/profile"}>ABCD XYZ</Link>
          </CardTitle>
          <CardDescription className="text-lg">email@gmail.com</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
