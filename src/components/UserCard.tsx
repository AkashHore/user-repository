import { UserCardType } from "@/lib/zodSchema";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcnui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "./shadcnui/card";

type UserCardProps = {
  ucData: UserCardType;
  currentUserId?: string;
};

const UserCard = ({ ucData, currentUserId }: UserCardProps) => {
  const { id, name, email, image } = ucData;

  const nameParts = name.trim().split(/\s+/);

  // const firstName = nameParts[0].charAt(0).toUpperCase();

  // const lastName = nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : "";

  const nameFallback = `${nameParts[0].charAt(0).toUpperCase()} ${nameParts[1] ? nameParts[1].charAt(0).toUpperCase() : ""}`;

  const canClickLink = !currentUserId || currentUserId === id;

  return (
    <Card className="my-4 w-xs">
      <CardHeader className="grid w-full place-items-center gap-4">
        <Avatar className="size-64">
          {image && <AvatarImage src={`/${image}`} />}
          <AvatarFallback className="text-3xl">{nameFallback}</AvatarFallback>
        </Avatar>
        <div className="">
          <CardTitle className="text-center text-2xl">
            {canClickLink ?
              <Link href="/profile">{name}</Link>
            : <span>{name}</span>}
          </CardTitle>
          <CardDescription className="text-lg">{email}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserCard;
