import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.btnCategorias}>
      <Link className={styles.NavLink} to="/"></Link>

      <ul>
        <li>INTERIOR</li>
        <li>EXTERIOR</li>
      </ul>
      <CartWidget />
      <i></i>
    </nav>
  );
}
