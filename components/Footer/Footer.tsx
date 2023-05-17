import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <p>Instagram</p>
        <p>TikTok</p>
        <p>Facebook</p>
      </section>
      <section>
        <p>Cookies</p>
        <p>Privacidad</p>
      </section>
      Copyright 2023 Cristal De Luna Tarot
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
