"use client";
import React from "react";
import { Swiper } from "antd-mobile";
import { EarringsImgs } from "../constant/cloud-image";
import { ImageViewerCombine } from "../components/image-viewer-combine";

export const TodaySwiper = () => {
  return (
    <div>
      <Swiper
        loop
        // autoplay
        onIndexChange={(i) => {
          console.log(i, "onIndexChange1");
        }}
      >
        {EarringsImgs.map((img, index) => {
          return (
            <Swiper.Item key={index}>
              <ImageViewerCombine
                fit="cover"
                src={img}
                width={"100vw"}
                height={"60vw"}
                alt="earrings"
              />
            </Swiper.Item>
          );
        })}
      </Swiper>
      <p>
        今日上新 小克重显大会发光的葫芦爆款拉丝葫芦来啦 黄金吊坠
        ，寓意节节又高升 ，黄金饰品 传统与时尚的碰撞 ，幸运配饰
        ，18k金，一口价💰520/个。
      </p>
    </div>
  );
};
