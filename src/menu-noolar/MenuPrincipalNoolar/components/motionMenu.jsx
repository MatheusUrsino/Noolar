import {motion} from "framer-motion";

function motionMainMenu() {
    return (
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título com animação */}
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>Noolar</h1>
          <p>
            Um lar acolhedor para
            <span className="OrangeText"> Imigrantes </span>
            do
            <span className="OrangeText"> Mercosul </span> e
            <span className="OrangeText"> América Latina. </span>
          </p>
        </motion.div>
  
        {/* Globo com animação */}
        <motion.div
          className="globoDiv"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="globoImg"
            src="/images/GloboMenu.png"
            alt="Globo Menu"
          />
        </motion.div>
  
        {/* Cards animados */}
        <div className="card-list">
          {[
            {
              title: "Área de Leitura",
              description: "Acesse ótimos conteúdos para leitura, dos mais diversos gêneros!",
              imageUrl: "/images/livros.png",
            },
            {
              title: "Cursos",
              description: "Desenvolva-se, aprenda, evolua!",
              imageUrl: "/images/mochila.png",
            },
            {
              title: "Comunidade",
              description: "Apoio e conexões com outros imigrantes para compartilhar experiências e crescer juntos.",
              imageUrl: "/images/comunity.png",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`card${index + 1}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Cards
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                bgColor=""
                buttonText="Acesse aqui"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }
  
  export default motionMainMenu;
  