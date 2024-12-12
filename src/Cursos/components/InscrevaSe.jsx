//InscrevaSe.jsx

import React from "react";
import Banner from "./Banner";

import '../css/InscrevaSe.css'
import Portugues from "./Portugues";
import Profissionalizante from "./Profissionalizante";
import Comunicacao from "./Comunicacao";
import Fim from "./Fim";

function InscrevaSe() {
    return(
        <div>
            <Banner />
            <Portugues />
            <Profissionalizante />
            <Comunicacao />
            <Fim />
           
        </div>
    )
}

export default InscrevaSe;