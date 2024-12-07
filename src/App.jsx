import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppMenu from "./menu-noolar/MenuPrincipalNoolar/components/menu";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";
import AppDaComunidades from "./ComunidadesArea/AppComunidades.jsx";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import NavbarApp from "./header/NavBarApp.jsx";


function App() {
  return (
    <>
      <header>
        <NavbarApp/>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<AppMenu />} />
          <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
          <Route path="/Documentos" element={<AppDocs />} />
          <Route
            path="/DocumentosNecessarios"
            element={<AppDocsNecessarios />}
          />
          <Route path="/Comunidades" element={<AppDaComunidades />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
