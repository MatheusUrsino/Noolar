import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./css/navBarStyle.css";
import ItensSideBar from "./components/itensSideBar";
import ItensNavBar from "./components/itensNavBar";
function NavbarApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="headerApp">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">
        <Link to="/" className="linkNavigate">
          <div className="logoContent">
            <img
              src="/images/logo.png"
              alt="Logo Noolar"
              width={64}
              height={64}
              className="logoImage"
            />
            <h2>Noolar</h2>
          </div>
        </Link>
        <div className="contentNavbar">
          <div className="opcoes">
          <ItensNavBar link="/AreaDaLeitura" item="Area da Leitura"/>
          <ItensNavBar link="/Cursos" item="Cursos"/>
          <ItensNavBar link="/Comunidades" item="Comunidade"/>
          <a href="https://lingo-lar.vercel.app/" className="linkNavigate navBarItens">LingoLar</a>
          <ItensNavBar link="/SobreNos" item="Sobre nós"/>
          <ItensNavBar link="/Documentos" item="Documentos"/>
          <ItensNavBar link="/Doacao" item="Doação"/>
          </div>
          <div className="userArea">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="sidebar">
          <button className="closeBtn" onClick={() => setMenuOpen(false)}>
            ×
          </button>
          <div className="sidebarLogo">
            <Link to="/" className="linkNavigate">
              <img
                src="/images/logo.png"
                alt="Logo Noolar"
                width={64}
                height={64}
              />
              <h2>Noolar</h2>
            </Link>
          </div>
          <div className="sideBarContent">
          <ItensSideBar link="/AreaDaLeitura" item="Area da Leitura"/>
          <ItensSideBar link="/Cursos" item="Cursos"/>
          <ItensSideBar link="/Comunidade" item="Comunidade"/>
          <a href="https://lingo-lar.vercel.app/" className="linkNavigate sideBarItens">LingoLar</a>
          <ItensSideBar link="/SobreNos" item="Sobre nós"/>
          <ItensSideBar link="/Documentos" item="Documentos"/>
          <ItensSideBar link="/Doacao" item="Doação"/>




          </div>
          <div className="sideBaruserArea">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavbarApp;
