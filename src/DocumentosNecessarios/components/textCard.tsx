import React from "react";
import "./css/styleTextCard.css";

function TextCard(props) {
  return (
    <div className="DocsNeedbox-livros">
      <div className="Docscard">
        <p className="DocstextoDoCard">{props.textoCard}</p>
        <div className="Docslivros"></div>
      </div>
    </div>
  );
}

export default TextCard;
