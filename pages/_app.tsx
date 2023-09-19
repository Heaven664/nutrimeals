import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { MealsContextProvider } from "@/store/MealsContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MealsContextProvider>
        <Component {...pageProps} />
      </MealsContextProvider>
    </Layout>
  );
}

