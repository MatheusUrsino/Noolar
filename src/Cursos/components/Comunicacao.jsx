import React from "react";
import '../css/InscrevaSe.css';
import Card from "./Card";



const Comunicacao = () => {
    return (
        <section className="section-containercc">
            <div className="text-box3">
                <p>Desvende os segredos da comunicação eficaz, <br /> aprendendo a <span className="highlight1">transmitir</span> e <span className="highlight2">receber informações</span> de <br /> forma <span className="highlight3">clara</span> e <span className="highlight1">precisa</span>.</p>
            </div>
            <div className="card-container">
                <Card nomeDoCurso={
                    <>
                    <h4>Comunicação </h4>
                    <h3>Intercultural</h3>
                    </>
                } imagem="/img/comunicacao1.svg"  nomeDoId="card1"></Card>
                <Card nomeDoCurso={
                    <>
                    <h4>Comunicação </h4>
                    <h3>Influente</h3>
                    </>
                } imagem="/img/comunicacao2.svg" nomeDoId="card2"></Card>
                <Card nomeDoCurso={
                    <>
                    <h4>Comunicação </h4>
                    <h3>Digital</h3>
                    </>
                } imagem="/img/comunicacao3.svg" nomeDoId="card3"></Card>

            </div>
        </section>

    );
}

export default Comunicacao;