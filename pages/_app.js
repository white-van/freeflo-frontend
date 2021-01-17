import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import theme from "../theme";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "../stores";
import Footer from "../components/Footer";
import AuthCheck from "../components/AuthCheck";
import ToastController from "../components/ToastController";

const pageToTitle = {
  "/": "freeflo.io",
  "/welcome": "freeflo.io - Welcome",
  "/write": "freeflo.io - Write a new article",
  "/read": "freeflo.io - Read and edit an article",
  "/profile": "freeflo.io - Your profile",
};

const PageWrapper = ({ children, title }) => {
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
        <AuthCheck />
        <ToastController />
        <PageWrapper title={pageToTitle[pathname]}>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
