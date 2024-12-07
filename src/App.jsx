import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppMenu from "./menu-noolar/MenuPrincipalNoolar/components/menu";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";
import AppComunidade from "./Comunidade/AppComunidade";

function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<AppMenu />} />
      <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
      <Route path="/Documentos" element={<AppDocs />} />
      <Route path="/DocumentosNecessarios" element={<AppDocsNecessarios />} />
      <Route path="/Comunidade" element={<AppComunidade />} />


      </Routes>
    </Router>
    </>
  );
}

export default App;
