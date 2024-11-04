import clsx from "clsx";
import Link from "next/link";
import { Lora } from "next/font/google";
import styles from "./index.module.scss";

const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <div
      className={clsx(
        "header flex justify-center items-center h-14",
        lora.className
      )}
    >
      <Link className={styles.title} href="/">
        xiaobao_store
      </Link>
    </div>
  );
};
export default Header;
