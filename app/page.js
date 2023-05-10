import Image from "next/image";
import styles from "./page.module.scss";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const title = data[0].title;
  return <main className={styles.main}>{title}</main>;
}
