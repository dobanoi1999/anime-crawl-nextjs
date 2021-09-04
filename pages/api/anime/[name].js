const puppeteer = require("puppeteer");
export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${process.env.URL_CRAWL}/${req.query?.name}`);
  const data = await page.evaluate(() => {
    const video =
      document.getElementsByTagName("video")[0]?.getAttribute("src") || "";
    const title = document.querySelector(".film-info-title").innerText || "";
    const views =
      document.querySelector(".film-info-views > span").innerText || "";
    const desc =
      document.querySelector(".film-info > .film-info-description").innerText ||
      "";
    const genreDoc =
      document.querySelectorAll(".film-info > .film-info-genre > a") || [];
    const genre = Array.from(genreDoc).map((i) => i.getAttribute("href"));

    return { video, title, views, desc, genre };
  });
  browser.close();
  res.json(data);
}
