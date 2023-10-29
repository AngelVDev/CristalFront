import React from "react";
import styles from "../../styles/landing.module.css";
import Image from "next/image";
import logoCristal from "/public/logocristal.png";
import Link from "next/link";

function Landing() {
  return (
    <>
      <Image
        className={styles.logoLanding}
        src={logoCristal}
        height={220}
        width={160}
        alt="logo"
        priority
      />
      <header className={styles.header}>
        <h1>Cristal de Luna</h1>
        <p className={styles.subheader}>TAROT</p>
      </header>
      <Link className={styles.landingButton} href="/login">
        Entrar
      </Link>
      <Link className={styles.landingButton} href="/register">
        Registrarse
      </Link>
    </>
  );
}

export default Landing;
