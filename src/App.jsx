import "./App.css";
import AppAreaDaLeitura from "./pages/AreaDaLeitura/src/AreaLeitura/AppAreaDaLeitura";
import AppComunidade from "./pages/Comunidade/comunidade/src/AppComunidade";
import AppDocs from "./pages/Documentos/src/AppDocs";
import AppDocsNecessarios from "./pages/DocumentosNecessarios/src/AppDocsNecessarios";
import AppMenu from "./pages/menu-noolar/MenuPrincipalNoolar/src/components/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<AppMenu />} />
      <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
      <Route path="/Comunidades" element={<AppComunidade />} />
      <Route path="/Documentos" element={<AppDocs />} />
      <Route path="/DocumentosNecessarios" element={<AppDocsNecessarios />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
