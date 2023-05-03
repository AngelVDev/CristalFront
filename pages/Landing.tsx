import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import logoCristal from "/public/logocristal.png";

import Login from "../components/Login";

function Landing(): React.ReactElement {
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
      <button
        className={styles.landingButton}
        onClick={() => document.querySelector("#modalDialog")?.showModal()}
      >
        Entrar
      </button>
      <dialog id="modalDialog" className={styles.formContainer}>
        <Login />
      </dialog>
      <button className={styles.landingButton}>Registrarse</button>
    </>
  );
}

export default Landing;
