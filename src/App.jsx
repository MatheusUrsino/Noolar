import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppMenu from "./menu-noolar/MenuPrincipalNoolar/components/menu";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";
import AppDaComunidades from "./ComunidadesArea/AppComunidades.jsx";
import NavbarApp from "./header/NavBarApp.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Router>
        <div vw="true" className="vw-widget" />
        <header className="aaaaaaaaaaa">
          <NavbarApp />
        </header>
        <Routes>
          <Route path="/" element={<AppMenu />} />
          <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
          <Route path="/Documentos" element={<AppDocs />} />
          <Route path="/DocumentosNecessarios" element={<AppDocsNecessarios />} />
          <Route path="/Comunidades" element={<AppDaComunidades />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
