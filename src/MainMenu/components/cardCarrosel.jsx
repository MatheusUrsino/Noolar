import React from "react";
import "./css/MainMenuStyle.css";

function CardCarrosel(props) {
  return (
    <div
      className="carroso_slide"
      style={{ backgroundImage: `url(${props.bgImage})` }} // Aplicando a imagem de fundo
    >
      <div className="textCarrosel">
        <h2>{props.titulo}</h2>
        <h4>{props.texto}</h4>
        <button className="carroselButton"><p>Acesse Aqui</p></button>

      </div>
        <div className={props.classeImagem}>
        </div>
      </div>
  );
}

export default CardCarrosel;
