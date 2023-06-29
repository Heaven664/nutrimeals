import React, { ReactNode, JSX } from "react";
import Header from "../header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
