import { ReactNode } from "react";
import BrauloFooter from "../sections/BrauloFooter";
import BrauloHeader from "../sections/BrauloHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <BrauloHeader></BrauloHeader>
      <div className="h-screen">{children}</div>
      <BrauloFooter></BrauloFooter>
    </>
  );
};

export default Layout;
