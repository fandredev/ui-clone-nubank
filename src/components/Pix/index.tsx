import React from "react";
import "./styles.scss";
import { BsArrowRightShort } from "react-icons/bs";

import phoneOkay from "../../assets/images/phoneOkay.webp";

const Pix = () => {
  return (
    <main>
      <aside>
        <h2>Pix: um novo jeito de fazer transferências e pagamentos</h2>
        <p>
          Saiba como funciona
          <i>
            <BsArrowRightShort size={20} />
          </i>
        </p>
        <button type="button">Quero ser Nubank</button>
      </aside>
      <figure>
        <img src={phoneOkay} alt="Pagamento para Helena Ribeiro" />
      </figure>
    </main>
  );
};
export default Pix;
