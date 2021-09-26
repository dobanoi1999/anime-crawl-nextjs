import Link from "next/link";
import React from "react";
import { IAnime } from "../models";
import styles from "../styles/animes.module.css";
import Card from "./Card";
interface IProp {
  animes: IAnime[];
  title?: string;
}
function Animes({ animes, title }: IProp) {
  if (animes.length <= 0) return <p>khong co data</p>;
  return (
    <section className="icontainer">
      {title && (
        <Link passHref href="/anime">
          <div className={styles.wrapperTitle}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subTitle}>
              <p className="mr-3">Xem tất cả</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </Link>
      )}
      <div className={styles.wrapper}>
        {animes.map((i, index) => (
          <Card {...i} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Animes;
