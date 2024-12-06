import React from "react";
import "./css/footer.css";
import 'boxicons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="footer-section">
          <h3>Início</h3>
          <ul className="inicio2">
            <li className="home">Home</li>
            <li className="cursos">Cursos</li>
            <li className="livros">Livros</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Mais</h3>
          <ul>
            <li>Comunidade</li>
            <li>Doação</li>
            <li>Relatos</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Sobre nós</h3>
          <ul>
            <li>Informações da empresa</li>
            <li>Chat</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="social-icons">
            <box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon>
            <box-icon name='instagram-alt' type='logo' color='#fff'></box-icon>
            <box-icon name='envelope' type='solid' color='#fff'></box-icon>
          </div>
          <button className="contact-button">Contato</button>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Copyright - Noolar
      </div>
    </footer>
  );
};

export default Footer;

