import React from "react";

import "./styles.scss";
import { BsArrowRightShort } from "react-icons/bs";
import creditCard from "../../assets/images/card.webp";

const CreditCard = () => {
  return (
    <section id="credit-card">
      <aside>
        <h2>Cartão de crédito</h2>
        <p>
          Pode chamar ele de roxinho. Além disso, pode chamar de moderno,
          gratuito e prático também.
        </p>
        <span>
          Saiba mais
          <i>
            <BsArrowRightShort size={20} />
          </i>
        </span>
      </aside>
      <figure>
        <img src={creditCard} alt="Cartão Nubank com uma mão segurando." />
      </figure>
    </section>
  );
};
export default CreditCard;
