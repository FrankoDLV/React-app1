import React from "react";
import CardWidget from "../CardWidget/CardWidget";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Apple</h1>
      <p>Bienvenidos</p>
      <div>
        <buttom>Iphone 12 Pro Max</buttom>
        <buttom>Iphone 13 Pro Max</buttom>
        <buttom>Iphone 14 Pro Max</buttom>
        <buttom>Iphone 14 Pro</buttom>
        <CardWidget />
      </div>
    </nav>
  );
}
