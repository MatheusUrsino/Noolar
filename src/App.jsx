import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppMenu from "./menu-noolar/MenuPrincipalNoolar/components/menu";
import AppAreaDaLeitura from "./AreaDaLeitura/AppAreaDaLeitura";
import AppDocs from "./Documentos/AppDocs";
import AppDocsNecessarios from "./DocumentosNecessarios/AppDocsNecessarios";
import AppDaComunidades from "./ComunidadesArea/AppComunidades.jsx";
import NavbarApp from "./header/NavBarApp.jsx";
import Footer from "./footer/Footer.jsx";
import SobreNos from "./SobreNos/SobreNos.jsx";
import AppServicos from "./Servicos/AppServicos.jsx";

function App() {

  return (
      <Router>
        <header>
          <NavbarApp />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AppMenu />} />
            <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
            <Route path="/Documentos" element={<AppDocs />} />
            <Route path="/DocumentosNecessarios" element={<AppDocsNecessarios />} />
            <Route path="/Comunidades" element={<AppDaComunidades />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/Servicos" element={<AppServicos />} />

          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
        
      </Router>
  );
}

export default App;
