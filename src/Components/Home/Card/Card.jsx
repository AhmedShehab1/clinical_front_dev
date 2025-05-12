import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div
      className={`col-10 col-md-4 col-lg-3 ${styles.card} shadow-none border-0 m-3 d-flex align-items-center gap-4 h-75 px-5 py-4 rounded-4 flex-column `}
    >
      <div className={styles.icon}>
        <i className={props.icon}></i>
      </div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
