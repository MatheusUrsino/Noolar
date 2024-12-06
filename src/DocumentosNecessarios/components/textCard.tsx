import React from "react";
import "./css/styleTextCard.css";

function TextCard(props) {
  return (
    <div className="Docsbox-livros">
      <div className="Docscard">
        <p className="DocstextoDoCard">{props.textoCard}</p>
        <div className="Docslivros"></div>
      </div>
    </div>
  );
}

export default TextCard;
