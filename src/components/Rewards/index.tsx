import React, { useContext } from "react";
import "./styles.scss";

import { FiArrowUpRight } from "react-icons/fi";
import runningFast from "../../assets/images/runningFast.png";
import phoneAndCard from "../../assets/images/phoneAndCard.webp";

import { NuContext } from "../../context/NuContext";

const Rewards: React.FC = () => {
  const context = useContext(NuContext);
  const { width } = context;

  return (
    <section id="rewards">
      <aside>
        <h2>Rewards</h2>
        <p>Um programa de pontos justo e fácil de usar.</p>
        <span>
          Saiba mais
          <i>
            <FiArrowUpRight size={20} />
          </i>
        </span>
      </aside>
      <figure>
        {width >= 700 ? (
          <img src={phoneAndCard} alt="Cartão Nubank com o celular no app" />
        ) : (
          <img src={runningFast} alt="Homem aventureiro correndo" />
        )}
      </figure>
    </section>
  );
};

export default Rewards;
