import { LayoutProps } from "@/lib/types";

const PublicLayout = async ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};

export default PublicLayout;
