import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import blackMen from "../../assets/images/blackMen.jpg.webp";
import "./styles.scss";

const PandemicInstructions = () => {
  return (
    <section id="pandemic-instructions">
      <aside>
        <h2>
          Traga seu
          <abbr title="Fundo de Garantia do Trabalho em Serviço">
            &nbsp;FGTS&nbsp;
          </abbr>
          e Auxílio Emergencial para o Nubank
        </h2>
        <p>
          Confira os benefícios
          <i>
            <BsArrowRightShort size={20} />
          </i>
        </p>
      </aside>
      <figure>
        <img src={blackMen} alt="Homem sentado olhando fixamente para frente" />
      </figure>
    </section>
  );
};

export default PandemicInstructions;
