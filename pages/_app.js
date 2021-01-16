import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from '../components/Navbar';
import theme from '../theme';

const pageToTitle = {
  "/": "Homepage",
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
  const { pathname } = router;

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pageToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
