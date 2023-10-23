import React from "react";
// import { User } from "../models/user.model";
import styles from "../styles/form.module.css";
import Link from "next/link";

function Register() {
  return (
    <section className={styles.sectionForm}>
      <header className={styles.headerForm}>Registro</header>
      <article className={styles.articleForm}>
        <form className={styles.realForm}>
          <label>Nombre</label>
          <input className={styles.inputForm} type="text" name="name" />
          <label>E-mail</label>
          <input className={styles.inputForm} type="text" name="email" />
          <label>Contraseña</label>
          <input className={styles.inputForm} type="password" name="password" />
          <label>Repita su contraseña</label>
          <input
            className={styles.inputForm}
            type="password"
            name="password2"
          />
          <label>País</label>
          <input className={styles.inputForm} type="text" name="country" />
          <label>País de residencia</label>
          <input className={styles.inputForm} type="text" name="residence" />
          <label>Fecha de nacimiento</label>
          <input className={styles.inputForm} type="text" name="birth" />
          {/* <div className={styles.divider}></div> */}
          <label>Teléfono</label>
          <input className={styles.inputForm} type="text" name="phone" />
          <label>Tiktok</label>
          <input className={styles.inputForm} type="text" name="tiktok" />
          <label>Instagram</label>
          <input className={styles.inputForm} type="text" name="instagram" />
          <label>Signo Zodiacal</label>
          <input className={styles.inputForm} type="text" name="signo" />
          <label>Referencia</label>
          <input className={styles.inputForm} type="text" name="referencia" />
          <label>Notas</label>
          <input className={styles.inputForm} type="text" name="notas" />
          <button className={styles.buttonForm}>Registro</button>
        </form>
        <Link className={styles.buttonForm} href={"/"}>
          Volver
        </Link>
      </article>
    </section>
  );
}

export default Register;
