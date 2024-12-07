import "./Pesquisa.css"; 

import Imagem from "/img/Vector.png";

const Pesquisa = () => {
  return (
    <div className="pesquisa">
        <h3 className="textoPesquisa">Pergunte á Comunidade</h3>        
        <input type="text" name="barraPesquisa" id="Pesquisa" placeholder="Pesquise na Comunidade" />                        
        <p className="paragrafoPesquisa">Pesquise respostas ou navegue pelo fóruns abaixo:</p>
    </div>
  )
}

export default Pesquisa