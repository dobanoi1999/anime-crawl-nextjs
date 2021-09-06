// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const puppeteer = require("puppeteer");

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const p = req.query?.page || "";
  
  await page.goto(`${process.env.URL_CRAWL}/anime/${p}`);

  const data = await page.evaluate(() => {
    const allAnime = document.querySelectorAll(
      ".tray> .tray-content > .tray-item"
    );
    const paginationList = document.querySelectorAll(
      ".pagination > .page-item"
    );
    const animes = Array.from(allAnime).map((i:any)=>{
      return {
         href :i.children[0]?.getAttribute("href") || "",
         image : i.children[0]?.children[0]?.getAttribute("src") || "",
         title : i.children[0]?.children[1]?.children[0].innerText || "",
         views :
          i.children[0]?.children[1]?.children[1]?.children[0]?.innerText || "",
      }
    });

    const pagination = Array.from(paginationList).map((i:any, index) => {
      return {
        href: i.children[0]?.getAttribute("href"),
        text:
          index === 0
            ? "icon-backward"
            : index === paginationList.length-1
            ? "icon-forward"
            : i.children[0]?.innerText,
      };
    });

    return { animes, pagination };
  });
  await browser.close();

  res.json(data);
}
