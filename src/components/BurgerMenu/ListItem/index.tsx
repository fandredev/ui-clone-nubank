import React from "react";

interface Children<T> {
  readonly text: T;
  className?: T;
  href?: T;
}

const ListItem: React.FC<Children<string>> = ({
  text,
  className = "menu-item",
  href = "https://nubank.com.br/",
}) => {
  return (
    <>
      <a className={className} href={href}>
        {text}
      </a>
      <br />
    </>
  );
};

export default ListItem;
