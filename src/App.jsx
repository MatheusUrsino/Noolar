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

function App() {


  return (
    <>
      <Router>
        <header>
          <NavbarApp />
        </header>
        <Routes>
          <Route path="/" element={<AppMenu />} />
          <Route path="/AreaDaLeitura" element={<AppAreaDaLeitura />} />
          <Route path="/Documentos" element={<AppDocs />} />
          <Route path="/DocumentosNecessarios" element={<AppDocsNecessarios />} />
          <Route path="/Comunidades" element={<AppDaComunidades />} />
          <Route path="/SobreNos" element={<SobreNos />} />
        </Routes>
          <Footer/>
      </Router>
    </>
  );
}


export default App;
