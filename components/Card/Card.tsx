import React from "react";
import { Service } from "../../models/service.model";
import styles from "./card.module.css";

const Card = ({ props }: { props: Service }) => {
  if (props) {
    return (
      <article className={styles.card}>
        <header className={styles.cardHeader}>{props.name}</header>
        <div className={styles.cardSecondHeader}>
          {/* <p className={styles.cardType}>{props.tipo}</p>{" "} */}
          <span className={styles.cardSpan}>
            {props.disponibilidad ? "Disponible" : "No disponible"}{" "}
          </span>
        </div>
        <div className={styles.cardDescription}>{props.descripcion}</div>
        <section className={styles.cardSecondSection}>
          <p className={styles.cardPrice}>ARS ${props.precioPesos}</p>
          {props.disponibilidad && (
            <button className={styles.cardButton}>Agendar</button>
          )}
        </section>
      </article>
    );
  } else {
    return null;
  }
};

export default Card;
