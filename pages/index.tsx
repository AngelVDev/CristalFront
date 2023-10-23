import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Footer from "../components/Footer/Footer";
import Landing from "./landing";

export default function Home(): React.ReactNode {
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
