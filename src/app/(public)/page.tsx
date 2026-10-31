import UserCard from "@/components/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User-Repository",
  description: "Home Page of User-repository",
};

const page = () => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-8 pt-22 pb-8 md:grid-cols-2 lg:grid-cols-3">
      {/* {allusers.map((item) => (
        <UserCard
          key={item.userId}
          ucData={item}
        />
      ))} */}

      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </section>
  );
};

export default page;
