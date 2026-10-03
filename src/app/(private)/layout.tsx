import { LayoutProps } from "@/lib/types";

const PrivateLayout = async ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};

export default PrivateLayout;
