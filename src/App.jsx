import "./App.css";

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import AppMenu from "./menu-noolar/MenuPrincipalNoolar/components/menu";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";
import AppDaComunidades from "./ComunidadesArea/AppComunidades.jsx";
import NavbarApp from "./header/NavBarApp.jsx";


function App() {
  return (
    <>
    
      <Router>
      <header>
        <NavbarApp/>
      </header>
     
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
