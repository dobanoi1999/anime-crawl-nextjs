import Head from "next/head";
import React, { ReactNode } from "react";
import Header from "./Header";
interface IPropType {
  children: ReactNode;
}
function Layout({ children }: IPropType) {
  return (
    <>
      <Head>
        <title>App Amine sieu cap vip pro</title>
      </Head>
      <Header />
      <main className=" h-screen">{children}</main>
      <footer>make by dobanoi</footer>
    </>
  );
}

export default Layout;
