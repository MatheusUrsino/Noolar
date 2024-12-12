import React from "react";
import "../css/InscrevaSe.css";

const Fim = () => {
  return (
    <footer className="Fim">
      <div className="ImagemFim">
        <img
          src="/img/BackgroundInscrevaSe.png"
          alt="Background Inscreva-Se section"
        />
      </div>
      <div className="text-containerf">
        <div className="text-sectionf">
          <h1>Formulário de Inscrição</h1>
          <p>
            Não perca tempo! Preencha o formulário <br /> e comece sua jornada
            de aprendizado.
          </p>
        </div>
        <div className="icon-sectionf">
          <img src="/img/icon2.svg" alt="Menina sentada com livros ao lado" />
        </div>
        <a href="#" ><button className="buttonf">Saiba mais</button></a>
      </div>
    </footer>
  );
};

export default Fim;
