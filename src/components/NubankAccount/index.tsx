import React from "react";
import "./styles.scss";

import { FiArrowUpRight } from "react-icons/fi";
import phone from "../../assets/images/phone.webp";

const NubankAccount = () => {
  return (
    <section id="account-nubank">
      <aside>
        <h2>Conta do Nubank</h2>

        <p>
          Nossa conta digital com mais de 20 milhões de clientes em todo o
          Brasil.
        </p>
        <span>
          Segura e sem complicações
          <i>
            <FiArrowUpRight size={20} />
          </i>
        </span>
      </aside>

      <figure>
        <img src={phone} alt="Telefone no aplicativo do nubank" />
      </figure>
    </section>
  );
};
export default NubankAccount;
