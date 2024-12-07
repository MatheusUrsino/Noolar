import Cards from "./Card";
import Footer from "./Footer";
import "./css/MainMenuStyle.css";
import motionMainMenu from "./motionMenu";
import { Link } from "react-router-dom";
function AppMenu() {
  return (
    // Tela Inicial
    <div className="container">
      <div className="title">
        <h1>Noolar</h1>
        <p>
          Um lar acolhedor para
          <span className="OrangeText"> Imigrantes </span>
          do
          <span className="OrangeText"> Mercosul </span> e
          <span className="OrangeText"> América Latina. </span>
        </p>
      </div>
      <div className="globoDiv">
        <img
          className="globoImg"
          src="/images/GloboMenu.png"
          alt=""
        />
      </div>
      <div className="bgImage">
        <img src="/images/BgMenu.png" alt="" />
      </div>
      <div className="transition1">
        <div className="desc1">
          <p>
            Noolar é uma plataforma inteligente para{" "}
            <span className="OrangeText">Imigrantes Latinos!</span>
          </p>
        </div>
        <div className="circulo">
          <img src="\images\circulo.png" alt="imagem de um circulo" />
        </div>
        <div className="imigrante1">
          <img src="/images/imig1.png" alt="" />
          <div className="nosso_objetivo">
            <div className="objetivo">
              <h1>Nosso objetivo é:</h1>
              <p id="textoObjetivo">
                Oferecer cursos de Português e Orientação sobre
                comportarmento no ambiente de trabalho. 
              </p>
            </div>
            <div className="card-list">
              <div className="card1">
                <Cards
                  title="Área de Leitura"
                  description="Acesse ótimos conteúdos para leitura, dos mais diversos genêros!"
                  imageUrl={"/images/livros.png"}
                  bgColor=""
                  destino="/AreaDaLeitura"
                  buttonText="Acesse aqui"
                ></Cards>
              </div>
              <div className="card2">
                {" "}
                <Cards
                  title="Cursos"
                  description="Desenvolva-se, aprenda, evolua!"
                  imageUrl={"/images/mochila.png"}
                  bgColor=""
                  destino="/Cursos"
                  buttonText="Acesse aqui"
                ></Cards>
              </div>
              <div className="card3">
                <Cards
                  title="Comunidade"
                  description="Apoio e conexões com outros
              imigrantes para compartilhar experiências e crescer
              juntos."
                  imageUrl={"/images/comunity.png"}
                  bgColor=""
                  destino="/Comunidades"
                  buttonText="Acesse aqui"
                ></Cards>
              </div>
            </div>
            <div className="IA">
              <div className="fundoIA">
                <img src="..\images\imgfundo.png" alt="" />
              </div>
              <div className="imgIA">
                <img src="..\images\PC_IA.png" alt="" />
              </div>
              <div className="IAtext">
                <h1>Descubra seu nível de português com a nossa IA!</h1>
                <p>
                  Faça um teste rápido e depois conheça o
                  <span className="YellowText"> Lingolar </span>, sua ferramenta
                  para aprender e praticar o idioma de forma simples e
                  personalizada!
                </p>
              </div>
              <div className="IAbutton">
                <button className="btnIA"><a href="https://lingo-lar.vercel.app/" className="linkNavigate">Acesse nossa IA:</a></button>
              </div>
              <div className="foot">
                <Footer></Footer>
              </div>
              <div className="doacao">
                <div className="fundo_doacao">
                  <img src="..\images\back.png" alt="" />
                  <div className="img_donar">
                    <img src="..\images\donar.png" alt="" />
                  </div>
                  <div className="text_donar">
                    <h1>Doe aqui!</h1>
                    <p>
                      Ajude a transformar vidas e apoiar imigrantes Latinos em
                      sua jornada de integração.
                    </p>
                    <Link to="/Doacao">
                    <button className="btnDoar">Doar agora</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppMenu;
