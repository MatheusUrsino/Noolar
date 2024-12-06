import React from "react";
import "./css/styleHeader.css";

function HeaderDocs(props) {
  return (
    <>
      <header>
        <div className="DocsbgImage">
          <img src="/bgBanner.svg" alt="" />
        </div>
        <div className="Docsbox-title">
          <h1 className="Docstitulo">Documentos Necessários</h1>
            <img
              className="DocsDocsImg"
              src="/Documentos.svg"
              alt="Descripción de la Imagen"
              
             />
          <h2 className="Docssubtitulo">
            Organizar a documentação desde o início agiliza o processo de
            imigração e evita atrasos na adaptação ao novo país!
          </h2>
        </div>

        <div className="DocsbtnSeusLivros"></div>
      </header>
    </>
  );
}

export default HeaderDocs;
