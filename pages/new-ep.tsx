import { GetServerSideProps } from "next";
import React from "react";
import { animeApi } from "../Api/animes";
import Animes from "../components/Animes";
import { IAnime } from "../models";
export interface IProps {
  animes: IAnime[];
}
function NewEp({ animes }: IProps) {
  if (!animes) return <p>error</p>;
  return (
    <div className=" py-20">
      <Animes animes={animes} />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const data: any = await animeApi.getNewEpList();

  return {
    props: {
      animes: data?.animes || null,
    },
  };
};
export default NewEp;
