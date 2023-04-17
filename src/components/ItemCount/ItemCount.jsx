import React, { useState } from "react";
import styles from "./ItemCount.module.css";

export default function ItemCoun({ stock, initial, onAdd }) {
  const [quantify, setQuantify] = useState(initial);

  const increment = () => {
    if (quantify < stock) {
      setQuantify(quantify + 1);
    }
  };

  const decrement = () => {
    if (quantify > 1) {
      setQuantify(quantify - 1);
    }
  };

  return (
    <div className={styles.itemcount}>
      <div>
        <button onClick={decrement}>-</button>
        <h4>{quantify}</h4>
        <button onClick={increment}>+</button>
        <button onClick={() => onAdd(quantify)}>Agregar al carrito</button>
      </div>
    </div>
  );
}
