import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { animeApi } from "../../Api/animes";
import Animes from "../../components/Animes";
import { IAnime, IPagination } from "../../models";
import styles from "../../styles/pagination.module.css";
export interface IProps {
  animes: IAnime[];
  pagination: IPagination[];
}
function AnimeList({ animes, pagination }: IProps) {
  const router = useRouter();

  const renderPagination = () => {
    return (
      <ul className={styles.pagination}>
        {pagination.map((i, index) => {
          const url = i.href.split("/")[2];
          let href = "anime";
          if (url) {
            href = `anime?page=${url}`;
          }
          let className = styles.page;
          if (router.query?.page && url === router.query?.page) {
            className = `${styles.page} ${styles.pageActive}`;
          }
          if (!router.query?.page && !url) {
            className = `${styles.page} ${styles.pageActive}`;
          }

          if (i.text === "icon-backward") {
            return (
              <Link href={href} key={index}>
                <p className={className}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                    />
                  </svg>
                </p>
              </Link>
            );
          }
          if (i.text === "icon-forward") {
            return (
              <Link href={href} key={index}>
                <p className={className}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                    />
                  </svg>
                </p>
              </Link>
            );
          }
          return (
            <Link href={href} key={index}>
              <p className={className}>{i.text}</p>
            </Link>
          );
        })}
      </ul>
    );
  };
  if (!animes || !pagination) return <p>error</p>;
  return (
    <>
      <Animes animes={animes} />
      {pagination?.length > 0 && renderPagination()}
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data: any = await animeApi.getAnimeList(ctx.query?.page);

  return {
    props: {
      animes: data?.animes || null,
      pagination: data?.pagination || null,
    },
  };
};
export default AnimeList;
