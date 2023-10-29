import Head from "next/head";
import styles from "../styles/landing.module.css";
import React from "react";
import Footer from "../components/Footer/Footer";
import Landing from "../components/Landing/landing";

export default function FirstPage(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Cristal de Luna</title>
        <meta name="Tarot" content="Tarot predictivo y evolutivo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Landing />
      </main>
      <Footer />
    </>
  );
}
