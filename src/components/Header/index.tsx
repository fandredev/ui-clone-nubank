import React, { useContext } from "react";
import icon from "../../assets/icons/nubank-white.png";
import "./styles.scss";
import BurgerMenu from "../BurgerMenu";
import Items from "./Items";

import { NuContext } from "../../context/NuContext";

const Header = () => {
  const context = useContext(NuContext);
  const { width } = context;
  return (
    <header>
      {width < 700 ? <BurgerMenu /> : <Items />}
      {width < 700 && (
        <figure>
          <img src={icon} alt="Nubank ícone" />
        </figure>
      )}
    </header>
  );
};

export default Header;
