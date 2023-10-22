import React from "react";
import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <form className={styles.form}>
      <label>Nombre</label>
      <input className={styles.inputs} type="text" />
      <label>Contraseña</label>
      <input className={styles.inputs} type="password" />
      <button className={styles.formButton} formMethod="dialog" type="submit">
        Cancelar
      </button>
      <button className={styles.formButton} type="submit">
        Confirmar
      </button>
    </form>
  );
};

export default Login;
