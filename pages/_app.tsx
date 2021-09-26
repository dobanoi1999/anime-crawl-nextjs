import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.css";
import Layout from "../components/Layout";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
const progress = new ProgressBar({
  size: 5,
  color: "#38a169",
  className: "bar-of-progress",
  delay: 100,
});
function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
