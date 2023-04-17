import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./Item.module.css";

export default function Item({ id, name, img, price, stock }) {
  return (
    <div className={styles.item}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{price}</p>
      <p>{stock}</p>
      <ItemCount
        initial={1}
        stock={10}
        onAdd={(quantify) => console.log("Cantidad agregada", quantify)}
      />
    </div>
  );
}
