import React from "react";
import styles from "../styles/login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <form className={styles.form}>
      <label>Nombre</label>
      <input className={styles.inputs} type="text" />
      <label>Contraseña</label>
      <input className={styles.inputs} type="password" />
      <button className={styles.formButton} type="submit">
        Confirmar
      </button>
      <Link className={styles.formButton} href={"/"}>
        Volver
      </Link>
    </form>
  );
};

export default Login;
