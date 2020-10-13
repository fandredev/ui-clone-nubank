import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./styles.css";
import icon from "../../assets/icons/nubank-white.png";

import ListItem from "./ListItem";

const BurgerMenu = () => {
  return (
    <Menu width="100%">
      <figure>
        <img src={icon} alt="Ícone Nubank" style={{ width: "15%" }} />
      </figure>
      <ListItem text="Ínicio" className="menu-item" />
      <ListItem text="Conta digital" className="menu-item" />
      <ListItem text="Cartão de crédito" className="menu-item" />
      <ListItem text="Cartão de crédito" className="menu-item" />
      <ListItem text="Pix (novo)" className="menu-item" />
      <ListItem text="Rewards" className="menu-item" />
      <ListItem text="Empréstimo" className="menu-item" />
      <ListItem text="Conta" className="menu-item" />
      <ListItem text="Sobre nós" className="menu-item" />
      <ListItem text="Carreiras" className="menu-item" />
      <ListItem text="Login" className="menu-item" />
    </Menu>
  );
};

export default BurgerMenu;
