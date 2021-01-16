import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";

import { closeAllToasts, displaySuccessToast } from "../stores/ui/actions";
import { connect } from "react-redux";

function Home({ closeAllToasts, displaySuccessToast }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Button
          colorScheme="blue"
          onClick={() => displaySuccessToast("u fool", "im monky")}
        >
          Click me to dispatch a toast
        </Button>
        <Button colorScheme="red" onClick={() => closeAllToasts()}>
          Click me to dismiss all toasts
        </Button>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default connect(null, {
  closeAllToasts,
  displaySuccessToast,
})(Home);
