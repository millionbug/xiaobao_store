"use client";

import styles from "./index.module.scss";
import { Necklace } from "../constant/cloud-image";
import { Image } from "antd-mobile";
import "wc-waterfall";
const StoreStream = () => {
  const items = Necklace.map((item, index) => {
    return (
      <div className={styles["item-container"]} key={item.link}>
        <div className={styles.image}>
          <Image style={{ borderRadius: 10 }} src={item.link} alt="necklace" />
        </div>
        <div className={styles.content}>
          <p className={`currentColor ${styles.p}`}>{item.description}</p>
          <div className={styles.price}>￥{index}.00</div>
        </div>
      </div>
    );
  });
  return (
    <wc-waterfall gap={10} cols={2}>
      {items}
    </wc-waterfall>
  );
  return <div className={styles.container}>{items}</div>;
};

export default StoreStream;
