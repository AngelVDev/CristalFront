import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <p className={styles.item}>Instagram</p>
        <p className={styles.item}>TikTok</p>
        <p className={styles.item}>Facebook</p>
      </section>
      <section className={styles.section}>
        <p className={styles.item}>Cookies</p>
        <p className={styles.item}>Privacidad</p>
      </section>
      <section className={styles.finalSection}>
        Copyright 2023 Cristal De Luna Tarot
      </section>
    </footer>
  );
};

/* 
Copyright 2023 Cristal De Luna Tarot
Redes
Cookies
Privacidad
*/

export default Footer;
