import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { animeApi } from "../../Api/animes";
import { IInfoAnime } from "../../models";
import styles from "../../styles/info.module.css";
interface IProps {
  animeInfo: IInfoAnime;
}
function Name({ animeInfo }: IProps) {
  return (
    <section className="icontainer">
      <video
        className={styles.video}
        controls
        src={animeInfo.video}
        autoPlay
      ></video>
      <h3 className={styles.title}>{animeInfo.title}</h3>
      <hr />
      <ul className={styles.tags}>
        {animeInfo.genre.map((i, index) => (
          <Link key={index} href={i}>
            <li className={styles.tag}>
              {i.replace("/anime/", "").replace("-", " ")}
            </li>
          </Link>
        ))}
      </ul>
      <div>
        <span className={styles.sub}>Mô Tả :</span>
        <p className={styles.desc}> {animeInfo.desc} </p>
      </div>
    </section>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const data = await animeApi.getAnime(ctx?.params?.all[0]);

  return {
    props: { animeInfo: data },
  };
};
export default Name;
