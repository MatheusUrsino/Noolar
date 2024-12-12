import React from "react";
import '../css/InscrevaSe.css';
import Card from "./Card";

const Portugues = () => {
    return (
        <section className="section-container">
            <div className="text-box">
                <p>
                    Domine o <span className="highlight">Português</span> do <span className="highlight2">básico</span> ao <br />
                    <span className="highlight3">avançado</span> e comunique-se com confiança.
                </p>
            </div>
            <div className="card-container">
                <Card 
                    nomeDoCurso={
                        <>
                        <h4>Português</h4>
                        <h3>Básico</h3>
                        </>
                    }
                    imagem="/img/portugues1.svg" 
                    nomeDoId="card1" 
                />
                <Card 
                    nomeDoCurso={
                        <>
                            <h4>Português</h4>
                            <h3>Intermediário</h3>
                        </>
                    } 
                    imagem="/img/portugues2.svg" 
                    nomeDoId="card2" 
                />
                <Card 
                    nomeDoCurso={
                        <>
                        <h4>Português</h4>
                        <h3>Avançado</h3>
                        </>
                    }
                    imagem="/img/portugues3.svg" 
                    nomeDoId="card3" 
                />
            </div>
        </section>
    );
}

export default Portugues;


