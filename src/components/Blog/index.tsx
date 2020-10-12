import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./styles.scss";

const Blog = () => {
  return (
    <section id="blog">
      <h2>Um blog para você repensar o seu dinheiro</h2>
      <span>
        Conheça o Fala, Nubank
        <i>
          <FiArrowUpRight size={20} />
        </i>
      </span>
    </section>
  );
};
export default Blog;
