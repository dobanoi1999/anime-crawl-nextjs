import Link from "next/link";
import React from "react";
import { IAnime } from "../models";
import styles from "../styles/animes.module.css";
import Card from "./Card";
interface IProp {
  episodes: IAnime[];
}
function NewEpisode({ episodes }: IProp) {
  if (episodes.length <= 0) return <p>khong co data</p>;
  return (
    <section className="icontainer">
      <Link href="/new-episode">
        <h2 className={styles.title}>
          {" "}
          <span> New Episode</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </h2>
      </Link>

      <div className={styles.wrapper}>
        {episodes.map((i, index) => (
          <Card {...i} key={index} />
        ))}
      </div>
    </section>
  );
}

export default NewEpisode;
