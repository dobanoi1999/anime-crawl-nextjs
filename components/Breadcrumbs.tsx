import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "styles/breadcrumb.module.css";

function Breadcrumbs() {
  const router = useRouter();

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray: any = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);
  if (breadcrumbs.length === 0) return <div></div>;
  return (
    <div className="icontainer mt-12">
      <ul className={styles.list}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-ctRed"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <Link href="/">
          <a className={styles.breadcrumb}>Trang chu</a>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        {breadcrumbs.map((i: any, index) => {
          return index === breadcrumbs.length - 1 ? (
            <>
              <p className={`${styles.breadcrumb} ${styles.active}`}>
                {" "}
                {i.breadcrumb}
              </p>
            </>
          ) : (
            <>
              <Link key={index} href={i.href}>
                <a className={styles.breadcrumb}>{i.breadcrumb}</a>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
