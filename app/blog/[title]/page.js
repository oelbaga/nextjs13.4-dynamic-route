import {
  redirect,
  //   usePathname,
  //   useRouter,
  //   useSearchParams,
} from "next/navigation";
import styles from "@/app/page.module.scss";

export default async function Home({ params }) {
  //   console.log(params);
  let paramTitle = params.title.replaceAll("-", " ");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const postWanted = data.filter((post) => {
    return post.title === paramTitle;
    // return post.id === 2;
  });
  let displayTitle;

  postWanted.length
    ? (displayTitle = postWanted[0].title)
    : (displayTitle = "Blog Not Found");
  //   if (!postWanted.length) {
  //     redirect("/not-found");
  //   }
  return (
    <main className={styles.main}>
      <h2>{displayTitle}</h2>
      <a
        href="https://jsonplaceholder.typicode.com/posts"
        rel="noopener noreferrer"
        target="_blank"
      >
        Use any title from the json and replace spaces with dashes in the
        dynamic url route and the title should display above.
      </a>
    </main>
  );
}
