import "./Inicio.css"; 
import "../../App.css"
const Inicio = () => {
  return (
        <div className='inicio'>       
            <h3 className="textoInicial">Bem-vindo à nossa</h3>
            <h2 className="destacado">Comunidade!</h2>
            <p className="paragrafoInicial">Encontre apoio e faça conexôes com outros latinos!</p>
            <h2 className="textInWhite">Uma boa <span className="highlightOrange">experiência</span> é oque desejamos a <span className="highlightAqua">vocês</span></h2>
        </div>    
  )
}

export default Inicio