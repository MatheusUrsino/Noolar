import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Card';

import './css/MainMenuStyle.css';


function AppMenu() {
  return (
    <div className="app-container">
      <header className="hero">

        <h1 className="hero__title">Noolar</h1>
        <p className="hero__subtitle">
          Um lar acolhedor para
          <span className="highlight"> Imigrantes </span>
          do
          <span className="highlight"> Mercosul </span> e
          <span className="highlight"> América Latina. </span>
        </p>
        <div className="hero__image">
          <img src="/images/GloboMenu.png" alt="Globo representando conexões globais" className="hero__globe" />
        </div>
      </header>

      <main>
        <section className="intro">
          <p className="intro__text">
            Noolar é uma plataforma inteligente para{" "}
            <span className="highlight">Imigrantes Latinos!</span>
          </p>
          <img src="/images/circulo.png" alt="Elemento decorativo circular" className="intro__circle" />
        </section>

        <section className="mission">
          <img src="/images/imig1.png" alt="Imigrante" className="mission__image" />
          <div className="mission__content">
            <h2 className="mission__title">Nosso objetivo é:</h2>
            <p className="mission__description">
              Oferecer cursos de Português e Orientação sobre
              comportamento no ambiente de trabalho.
            </p>
          </div>
        </section>

        <section className="features">
          <div className="features__grid">
            <Cards
              title="Área de Leitura"
              description="Acesse ótimos conteúdos para leitura, dos mais diversos gêneros!"
              imageUrl="/images/livros.png"
              destino="/AreaDaLeitura"
              buttonText="Acesse aqui"
            />
            <Cards
              title="Cursos"
              description="Desenvolva-se, aprenda, evolua!"
              imageUrl="/images/mochila.png"
              destino="/Cursos"
              buttonText="Acesse aqui"
            />
            <Cards
              title="Comunidade"
              description="Apoio e conexões com outros imigrantes para compartilhar experiências e crescer juntos."
              imageUrl="/images/comunity.png"
              destino="/Comunidades"
              buttonText="Acesse aqui"
            />
          </div>
        </section>

        <section className="ai-tool">
          <div className="ai-tool__content">
            <h2 className="ai-tool__title">Descubra seu nível de português com a nossa IA!</h2>
            <p className="ai-tool__description">
              Faça um teste rápido e depois conheça o
              <span className="highlight"> Lingolar</span>, sua ferramenta
              para aprender e praticar o idioma de forma simples e
              personalizada!
            </p>
            <a href="https://lingo-lar.vercel.app/" className="ai-tool__button">Acesse nossa IA</a>
          </div>
          <img src="/images/PC_IA.png" alt="Computador com IA" className="ai-tool__image" />
        </section>

        <section className="donation">
          <div className="donation__content">
            <h2 className="donation__title">Doe aqui!</h2>
            <p className="donation__description">
              Ajude a transformar vidas e apoiar imigrantes Latinos em
              sua jornada de integração.
            </p>
            <Link to="/Doacao" className="donation__button">Doar agora</Link>
          </div>
          <img src="/images/donar.png" alt="Imagem representando doação" className="donation__image" />
        </section>
      </main>

    </div>
  );
}

export default AppMenu;