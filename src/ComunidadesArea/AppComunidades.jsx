import Inicio from "./components/Inicio";
import Pesquisa from "./components/Pesquisa";
import Cards from "./components/Cards";
import "./css/styleComunidade.css";

function AppDaComunidades() {
  return (
    <>
      <div className="contentComunidade">
        <div className="bgComunidadeHeaderDiv">
          <Inicio />
        </div>

        <div className="bgComunidadeBodyDiv">
          <div className="paginaCOmunidadeObjetos">
            <Pesquisa />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDaComunidades;
