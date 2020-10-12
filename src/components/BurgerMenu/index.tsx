import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import "./styles.css";
import icon from "../../assets/icons/nubank-white.png";

const BurgerMenu = () => {
  return (
    <Menu width="100%">
      <figure>
        <img src={icon} alt="Ícone Nubank" style={{ width: "15%" }} />
      </figure>
      <a className="menu-item" href="https://nubank.com.br/">
        Ínicio
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Conta digital
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Cartão de crédito
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Pix (novo)
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Rewards
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Empréstimo
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Conta
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Sobre nós
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Carreiras
      </a>
      <a className="menu-item" href="https://nubank.com.br/">
        Login
      </a>
    </Menu>
  );
};

export default BurgerMenu;
