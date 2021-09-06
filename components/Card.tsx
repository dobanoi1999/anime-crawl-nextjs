import React from "react";
import { IAnime } from "../models";
import styles from "../styles/card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ title, views, image, href, episode }: IAnime) {
  return (
    <div className={`${styles.item}`}>
      <Link passHref href={`anime${href}`}>
        <div className={`${styles.overLay} `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </Link>
      <a>
        <Image
          sizes="100%"
          width="100%"
          height="100%"
          src={image}
          alt={title}
        />
        <span className={styles.view}>{views}</span>
        <p className={styles.title}>{title}</p>
        {episode && (
          <span className={styles.episode}>
            {episode?.split("-", 1).toString()}
          </span>
        )}
      </a>
    </div>
  );
}

export default Card;
