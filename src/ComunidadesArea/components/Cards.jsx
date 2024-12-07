import "./Cards.css"; 

import Card1 from "/img/ComunidadeImg1.jpg";
import Card2 from "/img/ComunidadeImg2.jpg";
import Card3 from "/img/ComunidadeImg3.jpg";
import Card4 from "/img/ComunidadeImg4.jpg";
import Card5 from "/img/ComunidadeImg5.jpg";
import Card6 from "/img/ComunidadeImg6.jpg";
import Card7 from "/img/ComunidadeImg7.jpg";
import Card8 from "/img/ComunidadeImg8.jpg";
import Card9 from "/img/ComunidadeImg9.jpg";
import Card10 from "/img/ComunidadeImg10.jpg";

import ImagemGlobo from "/img/ImagemMapa.png";

const Cards = () => {
  return (
    <div className="card">
        <h3 className="textoCards">Explore os tópicos abaixo e encontre o que você precisa para</h3>
        <h2 className="destacadoCards">Se sentir em casa</h2>


        <div className="cards">
            <img className="imagensConfiguracao" src={Card1} alt="Primeira comunidade" />
            <img className="imagensConfiguracao" src={Card2} alt="Segunda comunidade" />            
        </div>
        <div className="cards">
            <img className="imagensConfiguracao" src={Card3} alt="Terceira comunidade" />
            <img className="imagensConfiguracao" src={Card4} alt="Quarta comunidade" />            
        </div>
        <div className="cards">
            <img className="imagensConfiguracao" src={Card5} alt="Quinta comunidade" />
            <img className="imagensConfiguracao" src={Card6} alt="Sexta comunidade" />            
        </div>


        <h3 className="textoCards">Comunidades exclusiva para</h3>
        <h2 className="destacadoCards">Doadores:</h2>
        <div className="cards">
            <img className="imagensConfiguracao" src={Card7} alt="Setima comunidade" />
            <img className="imagensConfiguracao" src={Card8} alt="Oitava comunidade" />            
        </div>
        <div className="cards">
            <img className="imagensConfiguracao" src={Card9} alt="Nona comunidade" />
            <img className="imagensConfiguracao" src={Card10} alt="Decima comunidade" />            
        </div>


        <div className="contato">
            <img className="imagemGlobo" src={ImagemGlobo} alt="Imagem de um globo" />
            <div className="textos">
            <h3 className="textoContato">Esperamos que aproveitem as comunidades! </h3>
            <p className="paragrafoContato">em quaisquer sinais de discriminação, preconceito ou demais assuntos, entre em contato conosco.
            <p className="destacadoParagrafo">E-mail: contato@noolar.com.br</p></p>
            </div>
        </div>
    </div>
  )
}

export default Cards