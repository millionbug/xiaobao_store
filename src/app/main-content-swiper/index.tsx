"use client";
import { Swiper, Image } from "antd-mobile";
import { MainContentSwiperStatic } from "../constant/cloud-image";
import styles from "./index.module.scss";
import NextImage from "next/image";
const itemFactory = (index: number) => {
  const len = MainContentSwiperStatic.length;

  const item = MainContentSwiperStatic[index % len];

  return (
    <Swiper.Item key={index}>
      <div className={`${styles.swiperItem}`}>
        <div className={styles.swiperCard}>
          <Image
            className={styles.swiperCardImage}
            height={"30vw"}
            width={"30vw"}
            src={item.images[item.images.length - 1 || 0]}
          />
          <p className={styles.p}>
            {item.title}
            <NextImage
              className={styles.icon}
              width={15}
              height={20}
              src="/icon-wrap.svg"
              alt=""
            />
          </p>
        </div>
      </div>
    </Swiper.Item>
  );
};

const MainContentSwiper = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        loop={true}
        stuckAtBoundary={false}
        trackOffset={10}
        // slideSize={40}
        // total={6}
        // autoplay
      >
        {itemFactory}
      </Swiper>
    </div>
  );
};
export default MainContentSwiper;
