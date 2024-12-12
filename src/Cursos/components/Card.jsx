import React from "react";
import '../css/InscrevaSe.css';

function Card(Props)
{    return (
        <>
            <div className="card" id={Props.nomeDoId}>
                <img src={Props.imagem} alt={Props.legendas} className="imageCards" />
                <h3>{Props.nomeDoCurso}</h3>
                <a href="#"> <button>Inscreva-se</button></a>
            </div>
        </>
    );
};

export default Card;

//                <img src="/img/profissionalizante1.svg" alt="Imagem do curso básico" className="imageCards" />
