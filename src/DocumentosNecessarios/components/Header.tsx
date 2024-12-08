import React from "react";
import "./css/styleHeader.css";

function HeaderDocs(props) {
  return (
    <>
      <header>
        <div className="NescessariosDocsbgImage">
          <img src="/bgBanner.svg" alt="" />
        </div>
        <div className="NescessariosDocsbox-title">
          <h1 className="NescessariosDocstitulo">Documentos Necessários</h1>
            <img
              className="NescessariosDocsImg"
              src="/Documentos.svg"
              alt="Descripción de la Imagen"
              
             />
          <h2 className="NescessariosDocssubtitulo">
            Organizar a documentação desde o início agiliza o processo de
            imigração e evita atrasos na adaptação ao novo país!
          </h2>
        </div>

        <div className="NescessariosDocsbtnSeusLivros"></div>
      </header>
    </>
  );
}

export default HeaderDocs;
