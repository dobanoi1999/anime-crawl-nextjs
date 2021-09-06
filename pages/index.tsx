import { homeApi } from "../Api/home";
import Animes from "../components/Animes";
import Cartoon from "../components/Cartoon";
import Highlights from "../components/Highlights";
import NewEspisode from "../components/NewEpisode";
import Picked from "../components/Picked";
import { IHomeProps } from "../models";
interface IProps {
  data: IHomeProps;
}
export default function Home({ data }: IProps) {
  if (!data) return <p>error</p>;
  return (
    <div>
      <Highlights highlights={data.highlights} />
      <NewEspisode episodes={data.episodes} />
      <Picked picked={data.picked} />
      <Animes animes={data.animes} />
      <Cartoon cartoons={data.cartoons} />
    </div>
  );
}
export const getStaticProps = async () => {
  const data = await homeApi.getHomePage();

  return {
    props: {
      data: data || null,
    },
  };
};
