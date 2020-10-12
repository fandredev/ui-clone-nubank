import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import {
  RiFacebookCircleLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiTwitterLine,
} from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import icon from "../../assets/icons/nubank-white.png";
import appStoreAvailable from "../../assets/images/app-store-available.png";
import googlePlayAvailable from "../../assets/images/google-play-available.png";

import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <ol>
          <h2>Nubank</h2>
          <li>Sobre nós</li>
          <li>Carreiras</li>
          <li>Perguntas frequentes</li>
          <li>Contato</li>
          <li>Imprensa</li>
        </ol>
        <ol>
          <h2>Produtos</h2>
          <li>Conta digital</li>
          <li>Cartão de crédito</li>
          <li>Rewards</li>
          <li>Empréstimo</li>
          <li>
            CONTA&nbsp;
            <abbr title="Pessoa Júridica">PJ</abbr>
          </li>
        </ol>
      </div>
      <div>
        <ol>
          <h2>Explore</h2>
          <li>
            Comunidade
            <i>
              <FiArrowUpRight size={20} />
            </i>
          </li>
          <li>
            Blog
            <i>
              <FiArrowUpRight size={20} />
            </i>
          </li>
          <li>
            Newsletter
            <i>
              <FiArrowUpRight size={20} />
            </i>
          </li>
          <li>
            México
            <i>
              <FiArrowUpRight size={20} />
            </i>
          </li>
          <li>
            Argentina
            <i>
              <FiArrowUpRight size={20} />
            </i>
          </li>
          <li>
            Colômbia
            <i>
              <FiArrowUpRight size={20} />
            </i>
          </li>
        </ol>
        <ol>
          <h2>Veja também</h2>
          <li>
            Auxílio Emergêncial e&nbsp;
            <abbr title="Fundo de Garantia do Trabalhador em Serviço">
              FGTS
            </abbr>
            <i>
              <BsArrowRightShort size={20} />
            </i>
          </li>
          <li>
            Tudo sobre o Pix
            <i>
              <BsArrowRightShort size={20} />
            </i>
          </li>
        </ol>
      </div>
      <div>
        <ol>
          <h2>Transparência</h2>
          <li>Política de Privacidade</li>
          <li>Política de Compliance</li>
          <li>Contratos</li>
          <li>Política de Segurança</li>
          <li>Relatórios Financeiros</li>
          <li>Ética & Compliance</li>
          <li>Dados abertos</li>
          <li>
            <abbr title="Sistema de Informações de Crédito">SCR</abbr>
          </li>
        </ol>

        <ol>
          <h2>Ouvidoria</h2>
          <li>0800 887 0463</li>
          <li>ouvidoria@nubank.com.br</li>
          <li>Atendimento das 9h as 18h (dias úteis)</li>
        </ol>
      </div>
      <div>
        <ol id="attendence">
          <h2>Fale com a gente</h2>
          <li>0800 608 6236</li>
          <li>meajuda@nubank.com.br</li>
          <li>Atendimento 24hr</li>
        </ol>
        <ol>
          <li>
            <h2>Baixe o App</h2>
          </li>
          <li id="download-app">
            <figure>
              <img src={appStoreAvailable} alt="Disponível na App Store" />
            </figure>
            <li>
              <figure>
                <img
                  src={googlePlayAvailable}
                  alt="Disponível no Google Play"
                />
              </figure>
            </li>
          </li>
        </ol>
      </div>

      <figure id="nu-logo">
        <img src={icon} alt="Nubank logotipo" />
      </figure>
      <aside id="info">
        <address>
          <span>
            &copy;
            {new Date().getFullYear()}
{' '}
Nu Pagamentos
</span>
          <span> S.A 18.236.120/0001-58</span>
          <span> Rua Capote Valente, 39 - São Paulo,&nbsp;</span>
          <span>
            <abbr title="SP">SP</abbr> - 05409-000
          </span>
        </address>
        <article>
          <RiFacebookCircleLine size={30} />
          <IoLogoInstagram size={30} />
          <RiLinkedinBoxLine size={30} />
          <RiYoutubeLine size={30} />
          <RiTwitterLine size={30} />
        </article>
      </aside>
    </footer>
  );
};
export default Footer;
