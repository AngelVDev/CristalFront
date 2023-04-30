import React from "react";
import styles from "../styles/Home.module.css";
// import Image from "next/image";

const logoCristal = "/public/logocristal.png";

function Landing(): React.ReactElement {
  return (
    <>
      <img src={logoCristal} height={550} width={447} alt="logo" />
      <header className={styles.header}>
        <h1>Cristal de Luna</h1>
        <p className={styles.subheader}>TAROT</p>
      </header>
      <button className={styles.landingButton}>Entrar</button>
      <button className={styles.landingButton}>Registrarse</button>
    </>
  );
}

export default Landing;
