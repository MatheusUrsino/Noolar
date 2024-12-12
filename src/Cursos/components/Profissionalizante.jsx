import React from "react";
import '../css/InscrevaSe.css';
import Card from "./Card"


const Profissionalizante = () => {
    return (
        <section className="section-containerc">
            <div className="text-box2">
                <p>Prepare-se para um futuro de qualidade: <br /> seja um <span className="highlight2"> Profissional de excelência.</span> </p>
            </div>
            <div className="card-container">
                <Card nomeDoCurso="Assistente de Controle de Qualidade" imagem="/img/profissionalizante1.svg"  nomeDoId="card1"></Card>
                <Card nomeDoCurso={<>Técnico <br /> em Administração</>} imagem="/img/profissionalizante2.svg" nomeDoId="card2"></Card>
                <Card nomeDoCurso={<>Técnico <br />de Gastronomia</>} imagem="/img/profissionalizante3.svg" nomeDoId="card3"></Card>

                
            </div>
        </section>

    );
}

export default Profissionalizante;