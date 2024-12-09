// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

// img import
import LingolarImg from '../assets/lingolarImg.png';
import Documents from '../assets/documentosNoolar.png';


const dadosCarrosel = [
    {
        imgUrl: LingolarImg,
        titulo: "Descubra seu nível de português com a nossa IA!",
        texto: "Faça um teste rápido e depois conheça o Lingolar, sua ferramenta para aprender e praticar o idioma de forma simples e personalizada!",
        btn: "Acesse nossa IA"

    },
    {
        imgUrl: Documents,
        titulo: "Documentos em Mãos: Simplificando Sua Jornada como Imigrante!",
        texto: "Descubra de forma simples e rápida quais documentos você precisa para se regularizar no Brasil. Confira a lista completa e facilite sua integração no país!",
        btn: "Descubra aqui"

    }
]
export default () => {
    return (
        <Swiper
            className='crosel'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {dadosCarrosel.map((CarouselCard, index) => (
                <SwiperSlide key={index} onClick={() => console.log(index)} className='carrosel_card'>
                    <div className='carrosel_card_inner'>
                        <img className='carrosel_img' src={CarouselCard.imgUrl} alt="Imagem do card" />
                        <div>
                            <h1 className='carrosel_titulo'>{CarouselCard.titulo}</h1>
                            <p className='carrosel_texto'>{CarouselCard.texto}</p>
                            <br />
                            <br />
                            <Link className='carrosel_botao'>{CarouselCard.btn}</Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};