import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IHighlight } from "../models";
import styles from "../styles/highlight.module.css";
interface IProp {
  highlights: Array<IHighlight>;
}
function Highlights({ highlights }: IProp) {
  if (highlights.length <= 0) return <p>khong co data</p>;
  return (
    <section className="icontainer">
      <div className="mt-24 px-16">
        <h2 className="text-xl font-normal">Highlights</h2>
        <Carousel axis="horizontal" autoPlay infiniteLoop={true}>
          {highlights.map((i, index) => {
            return (
              <a key={index} className={styles.item} href={i.href}>
                <img
                  className="w-full block  object-cover min-h-full "
                  src={i.image}
                  alt={i.title}
                />
                <p className={styles.title}>{i.title}</p>
              </a>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

export default Highlights;
