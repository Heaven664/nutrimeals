import React, { ReactNode, JSX } from "react";
import Header from '@/components/header/Header';
import Footer from "@/components/footer/Footer";

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
