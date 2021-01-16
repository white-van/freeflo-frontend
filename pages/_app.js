import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

import configureStore from "../stores";

const pageToTitle = {
  "/": "Homepage",
};

const Navbar = () => {
  return <div>Hi I'm the Navbar</div>;
};

const Footer = () => {
  return <div>Hi I'm the Footer</div>;
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
    <ChakraProvider>
      <Provider store={store}>
        <PageWrapper title={pageToTitle[pathname]}>
          <Component {...pageProps} />
        </PageWrapper>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
