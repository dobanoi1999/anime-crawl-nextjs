import { homeApi } from "../Api/home";
import Animes from "../components/Animes";
import Highlights from "../components/Highlights";
import { IHomeProps } from "../models";
interface IProps {
  data: IHomeProps;
}
export default function Home({ data }: IProps) {
  return (
    <div>
      <Highlights highlights={data?.highlights || []} />
      <Animes title="Tập mới nhất" animes={data?.episodes || []} />
      <Animes title="Hôm nay xem gì" animes={data?.picked || []} />
      <Animes title="Danh sách Anime" animes={data?.animes || []} />
      {/* <Animes title="Phim hoạt hình" animes={data?.cartoons || []} /> */}
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await homeApi.getHomePage();

  if (typeof data === "function") {
    return {
      props: {
        data: null,
      },
    };
  }
  return {
    props: {
      data: data || {},
    },
  };
};
