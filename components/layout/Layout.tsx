import React, { ReactNode, JSX } from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
