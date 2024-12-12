import React from "react";
import "./styleComunidadeTextCard.css";

function TextCard(props) {
  return (
    <div className={props.classe}>
      <div className="Docscard">
        <p className={props.classeDoTexto}>{props.textoCard}</p>
        <div className="Docslivros"></div>
      </div>
    </div>
  );
}

export default TextCard;