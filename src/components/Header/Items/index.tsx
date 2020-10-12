import React, { useEffect, createRef, useContext } from "react";

import "./styles.scss";

import icon from "../../../assets/icons/nubank-white.png";
import { NuContext } from "../../../context/NuContext";

const Items: React.FC = () => {
  const ref = createRef<HTMLLIElement>();

  useEffect(() => ref.current?.focus(), []);

  const context = useContext(NuContext)
  const { width } = context
  return (
    <nav>
      <ol>
        <img src={icon} alt="Nubank ícone" />
        <li ref={ref}>Ínicio</li>
        <li>Conta digital</li>
        <li>Cartão de crédito</li>
        {width >= 800 ? (
           <li>Pix</li>
        ): ''}
        {width >= 900 ? (
          <li>Rewards</li>
        ): ''}
        <li>Empréstimo</li>
        {width >= 1000 ? (
            <>
          <li>
            <span>Conta PJ</span>
          </li>
          <li>
            <span>Sobre nós</span>
          </li>
          <li>
            <span>Carreiras</span>
          </li>
          </>
        ):''}
        <li>
          <span style={{color: '#8a05be'}}>Login</span>
        </li>
        <li>
          <button type="button">Quero ser Nubank</button>
        </li>
      </ol>
    </nav>
  );
};

export default Items;
