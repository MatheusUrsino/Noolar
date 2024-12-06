import React from 'react';
import './css/styleCardStatic.css'; // Certifique-se de que o CSS está importado corretamente

function CardStatic(props) {
  return (
    <div className="DocscardStatic">
    <img 
      src={props.imagem} 
      alt={props.legenda} 
      className="DocscardStatic-image"
    />
    <h2 className="DocscardStatic-title">{props.titulo}</h2>
  </div>
  );
};

export default CardStatic;
