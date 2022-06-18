import { ReactNode } from "react";
import BraulFooter from "../sections/BraulFooter";
import BraulHeader from "../sections/BraulHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BraulHeader></BraulHeader>
      <div className="h-screen">{children}</div>
      <BraulFooter></BraulFooter>
    </>
  );
};

export default Layout;
