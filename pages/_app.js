import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import theme from "../theme";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

import { getRequest } from "../requests";
import configureStore from "../stores";
import Footer from "../components/Footer";
import ToastController from "../components/ToastController";

const pageToTitle = {
  "/": "freeflo.io - Homepage",
  "/write": "freeflo.io - Write a new article",
};

const PageWrapper = ({ children, title }) => {
  useEffect(() => {
    getRequest("/users/");
  }, []);

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const store = configureStore();
  const { pathname } = router;

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <ToastController />
        <PageWrapper title={pageToTitle[pathname]}>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
