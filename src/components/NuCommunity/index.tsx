import React from "react";
import "./styles.scss";

import { FiArrowUpRight } from "react-icons/fi";

const NuCommnunity = () => {
  return (
    <section id="nu-community">
      <h2>NuCommunity</h2>
      <p>A comunidade oficial do Nubank</p>
      <span>
        Tire dúvidas, compartilhe ideias e faça parte
        <i>
          <FiArrowUpRight size={20} />
        </i>
      </span>
    </section>
  );
};

export default NuCommnunity;
