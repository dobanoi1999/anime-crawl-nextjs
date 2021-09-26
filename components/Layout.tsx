import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Header from "./Header";
interface IPropType {
  children: ReactNode;
}
function Layout({ children }: IPropType) {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  const ev: any = process.browser && addEventListener("scroll", handleScroll);
  useEffect(() => {
    handleScroll();
    return () => {
      removeEventListener("scroll", ev);
    };
  }, []);

  return (
    <>
      <Head>
        <title>App Amine sieu cap vip pro</title>
      </Head>
      <Header />
      <main className=" py-20 h-full">
        <div>
          <Breadcrumbs />
        </div>
        {children}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className={`rounded-sm transition-all duration-300 ease-in-out fixed right-5 bottom-10 
          animate-bounce
           border-pink-800 border-2 p-2
           ${isScroll ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </main>
      <footer className="bottom-0">make by dobanoi</footer>
    </>
  );
}

export default Layout;
