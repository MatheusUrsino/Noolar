// Banner.jsx
import React from "react";
import "../css/InscrevaSe.css";

const Banner = () => {
  return (
    <section className="banner">
  <img
    className="imagembanner"
    src="/img/Backgroundbanner.svg"
    alt="Background Banner section"
  />
  <div className="text-container">
    <div className="text-section">
      <p>
        Encontre o <span className="highlight">Curso Ideal</span> para <br />
        impulsionar <span className="highlight">Sua Carreira!</span>
      </p>
    </div>
    <div className="icon-section">
      <img src="/img/icon1.svg" alt="Livros Abertos" />
    </div>
  </div>
</section>

  );
};

export default Banner;


