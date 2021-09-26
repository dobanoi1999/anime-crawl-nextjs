import { animeApi } from "Api/animes";
import Animes from "components/Animes";
import { IAnime } from "models";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import styles from "styles/TopAnimes.module.css";
interface IProps {
  topRanks?: IAnime[];
  type?: string;
}
function Rank({ topRanks, type = "day" }: IProps) {
  const renderRankMenu = () => {
    const types = [
      { name: "Ngày", value: "day" },
      { name: "Tuần", value: "week" },
      { name: "Tháng", value: "month" },
      { name: "Năm", value: "year" },
    ];
    return types.map((i, index) => (
      <Link key={index} href={`?type=${i.value}`}>
        <li
          className={`${styles.item} ${i.value === type && styles.itemActive}`}
        >
          {i.name}
        </li>
      </Link>
    ));
  };
  return (
    <div>
      <div className={`${styles.wrapperTitle} icontainer`}>
        <h2 className={styles.title}>Bảng xếp hạng</h2>
        <ul className={styles.menu}>{renderRankMenu()}</ul>
      </div>
      <Animes animes={topRanks || []} />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const type = ctx?.query?.type || "";
  console.log(ctx?.query);
  const data: any = await animeApi.getTopAnimes(type);

  return {
    props: { topRanks: data.animes || null, type: type || "day" },
  };
};
export default Rank;
