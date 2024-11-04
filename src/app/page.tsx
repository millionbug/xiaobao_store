import Header from "./header";
import MainContentSwiper from "./main-content-swiper";
import StoreStream from "./store-stream";
import { TodaySwiper } from "./today-swiper";
export default function Home() {
  return (
    <div>
      <Header />
      {/* 弄一个今日上新 */}
      <TodaySwiper />
      {/* 首先是一个轮播图 */}
      <MainContentSwiper />
      {/* 然后是一个瀑布流 */}
      <StoreStream />
    </div>
  );
}
