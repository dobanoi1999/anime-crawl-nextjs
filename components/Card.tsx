import Link from "next/link";
import React from "react";
import { IAnime } from "../models";
import styles from "../styles/card.module.css";

function Card({ title, views, image, href, episode }: IAnime) {
  return (
    <div className=" mb-20">
      <Link href={`anime${href}`}>
        <div className={styles.item}>
          <img className={styles.img} src={image} alt={title} />
          <span className={styles.view}>{views}</span>

          {episode && (
            <span className={styles.episode}>
              {episode?.split("-", 1).toString()}
            </span>
          )}
        </div>
      </Link>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;
