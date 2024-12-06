import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppMenu from "./menu-noolar/MenuPrincipalNoolar/components/menu";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";

function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<AppMenu />} />
      <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
      <Route path="/Documentos" element={<AppDocs />} />
      <Route path="/DocumentosNecessarios" element={<AppDocsNecessarios />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
