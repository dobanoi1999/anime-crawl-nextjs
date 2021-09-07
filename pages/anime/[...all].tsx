/* eslint-disable @next/next/link-passhref */
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { animeApi } from "../../Api/animes";
import { IInfoAnime, IPagination } from "../../models";
import styles from "../../styles/info.module.css";
interface IProps {
  animeInfo: IInfoAnime;
  episodes: IPagination[];
}
function Name({ animeInfo, episodes }: IProps) {
  if (!animeInfo || !episodes) return <p>error</p>;
  return (
    <section className="icontainer">
      <div>
        <video
          className={styles.video}
          controls
          src={animeInfo.video}
          autoPlay
        ></video>
        <ul className={styles.listEp}>
          {episodes.map((i, index) => {
            return (
              <Link key={index} passHref href={`/anime${i.href}`}>
                <li className={styles.ep}>{i.text.split("-", 1).toString()}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <h3 className={styles.title}>{animeInfo.title}</h3>
      <hr />
      <ul className={styles.tags}>
        {animeInfo.genre.map((i, index) => (
          <Link key={index} href={i.href}>
            <li className={styles.tag}>{i.tag}</li>
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
  const data: any = await animeApi.getAnime({
    name: ctx?.params?.all[0],
    ep: ctx?.params?.all[1],
  });

  return {
    props: { animeInfo: data?.info || null, episodes: data?.episodes || null },
  };
};
export default Name;
