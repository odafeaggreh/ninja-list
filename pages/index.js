import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          dolorum aspernatur deleniti id. Atque autem provident, soluta
          molestiae ad rerum veniam nostrum quod repellendus vel, iusto
          molestias, praesentium dolor corporis?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          dolorum aspernatur deleniti id. Atque autem provident, soluta
          molestiae ad rerum veniam nostrum quod repellendus vel, iusto
          molestias, praesentium dolor corporis?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
