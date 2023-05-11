import Link from "next/link";
import styles from "./page.module.scss";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const title = data[0].title;
  return (
    <main className={styles.main}>
      First Item from Fetch: <h4>{title}</h4>
      <Link href="./blog/qui-est-esse">Go to Dynamic Blog Post</Link>
      <h4></h4>
    </main>
  );
}
