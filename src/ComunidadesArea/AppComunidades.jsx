import Inicio from "./components/Inicio";
import Pesquisa from "./components/Pesquisa";
import Cards from "./components/Cards";
import "./css/styleComunidade.css";
import { useEffect } from "react";

function AppDaComunidades() {
  useEffect(() => {
    document.body.classList.add("bgComunidade");
    return () => {
      document.body.classList.remove("bgComunidade");
    };
  }, []);
  return (
    <>
        <div className="contentComunidade">
          <Inicio />
          <div className="paginaCOmunidadeObjetos">
            <Pesquisa />
            <Cards />
          </div>
        </div>
    </>
  );
}

export default AppDaComunidades;
