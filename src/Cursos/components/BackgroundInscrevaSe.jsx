//Background InscrevaSe

import React from "react";
import '../css/InscrevaSe.css'

function BackgroundInscrevaSe(props) {
    return (
        <div className="background-inscrevase">
            <img src={props.imagem1} alt="" className="background-imagem bi1" />
            <img src={props.imagem2} alt="" className="background-imagem bi2" />
        </div>
    );
}

export default BackgroundInscrevaSe;
