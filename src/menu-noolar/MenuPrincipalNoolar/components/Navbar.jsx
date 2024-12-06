import React from 'react';
import './css/navbar.css';
import 'boxicons'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className='logo' src="/images/logo.png" alt="Logo" />
                <span class="logo-text">Noolar</span>
            </div>

            {/*Icone de Busca*/}
            <div className='search-icon'>
                <img className='search' src='/images/search.png' alt="search" />
            </div>

            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#doacao">Doação</a>
                <a href="#relatos">Relatos</a>
            </div>

            {/* Icone do Usuário */}
            <div className="navbar-actions">
                <div className="profile">
                <img className="usuario" src='/images/User.png' alt="User" />
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
{/*Navbar pra celular*/}

