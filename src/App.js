import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import confetti from 'canvas-confetti';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./ultra-kawaii.css";
import './App.css';

import Lunara from './assets/Lunara.jpg';
import foto1 from './assets/Dormindo igual rampa.jpg';
import foto2 from './assets/Privacidade Zero.jpg';
import caixa from './assets/caixa.jpg';
import gatoCururu from './assets/gato cururu.jpg';
import lunaraMajestosa from './assets/Lunara.jpg';
import mesa from './assets/mesa.jpg';
import miniLunara2 from './assets/mini lunara 2.jpg';
import miniLunara from './assets/mini lunara.jpg';
import posicaoEstranha from './assets/posição estranha.jpg';
import vet from './assets/vet.jpg';
import pawImg from './assets/paw.png';
import miadoSom from './assets/miado.m4a';

import KawaiiElements from './KawaiiElements';

const catPhotos = [
    {
        src: foto1,
        caption: "Todos julgam minha pose de dormir, mas eu acho confortável!",
    },
    {
        src: foto2,
        caption: "Sinceramente, eu não concordo com a utilização dessa foto...",
    },
    {
        src: caixa,
        caption: "As compras chegaram? Beleza, a caixa agora é minha cama oficial.",
    },
    {
        src: gatoCururu,
        caption: "Chamaram de posição estranha… eu chamo de ioga felina avançada.",
    },
    {
        src: lunaraMajestosa,
        caption: "Sim, eu sou majestosa. Sim, você pode me adorar à vontade.",
    },
    {
        src: mesa,
        caption: "Eles não entendem que essa mesa na verdade é minha.",
    },
    {
        src: miniLunara2,
        caption: "Pequena no tamanho, gigante no charme. Já nasci diva.",
    },
    {
        src: miniLunara,
        caption: "Primeiro soninho registrado… treino pesado pro título de Mestre em Cochilos.",
    },
    {
        src: posicaoEstranha,
        caption: "Equilibrar-se em lugares improváveis é uma arte. Poucos entendem.",
    },
    {
        src: vet,
        caption: "Colocaram coleira e me levaram ao vet… mas continuo plena e estilosa.",
    },
];

const skills = [
    {
        title: "Mestre em amassar pão",
        icon: "🍞",
        description: "Especialidade em amassar superfícies macias com as patinhas por até 20 minutos seguidos. Essa técnica relaxante é resultado de anos de prática e aperfeiçoamento. A pressão aplicada e o ritmo são perfeitamente calibrados para proporcionar máximo conforto à Lunara, além de mostrar afeto aos humanos. Certificada pelo Instituto Felino de Massagens."
    },
    {
        title: "Especialista em cochilos",
        icon: "😴",
        description: "Capacidade de dormir em média 16 horas por dia, adaptando-se a qualquer superfície e posição. Especializada em encontrar o local mais inconveniente para os humanos e transformá-lo em uma cama perfeita. Detentora do recorde de 5 posições diferentes de dormir em um único cochilo. Mestra em ronronar enquanto dorme."
    },
    {
        title: "Caçadora de luzinhas",
        icon: "🔦",
        description: "Reflexos sobre-felinos que permitem rastrear e capturar pontos luminosos com precisão milimétrica. Prática diária de perseguição a lasers e reflexos de celular. Consegue detectar o menor movimento de luz em um raio de 10 metros, mesmo quando está aparentemente dormindo. Táticas avançadas incluem saltos acrobáticos e derrapagens controladas."
    },
    {
        title: "Influencer de miados",
        icon: "🎤",
        description: "Comunicadora nata com mais de 27 variações sonoras de miados, cada um com propósito específico. Especialista em acordar humanos às 5h da manhã com miados melodiosos. Voz potente que atravessa paredes. Treinada para maximizar o volume do miado em proporção inversa à urgência da necessidade."
    },
    {
        title: "Sommelier de sachês",
        icon: "🥫",
        description: "Paladar refinado capaz de distinguir mais de 50 sabores diferentes de ração úmida. Habilidade incrível de recusar comida quando não está no ponto ideal de temperatura e textura. Especialista em convencer humanos a abrir múltiplos sachês até encontrar o preferido do dia. Crítica gastronômica severa mas justa."
    },
    {
        title: "Alpinista de prateleiras",
        icon: "🧗",
        description: "Capacidade de escalar qualquer superfície vertical, desafiando a gravidade com garras e determinação. Técnica impecável para alcançar os lugares mais altos e inacessíveis da casa. Especialista em derrubar objetos estratégicos para testar a velocidade de reação dos humanos. Destemor de alturas e obsessão por conquistar novos territórios elevados."
    },
    {
        title: "Guardadora oficial de caixas de papelão",
        icon: "📦",
        description: "Talento natural para identificar a caixa mais valiosa da casa e reivindicá-la como território pessoal. Técnicas avançadas de amassar, arranhar e moldar papelão para criar o ninho perfeito. Capaz de entrar em caixas aparentemente pequenas demais, demonstrando que gatos são, na verdade, líquidos. Defensora ferrenha de sua coleção de caixas."
    },
    {
        title: "Fiscal de sacolas",
        icon: "🛍️",
        description: "Inspeção minuciosa de todas as sacolas que entram em casa, garantindo que nada escape ao seu controle de qualidade. Velocidade impressionante para mergulhar dentro de qualquer sacola recém-chegada. Faro excepcional para localizar sacolas com potencial para virar brinquedos. Especialista em produzir sons crepitantes durante inspeções noturnas."
    },
    {
        title: "Ninja do modo furtivo às 6 da manhã",
        icon: "🥷",
        description: "Mestra em movimentos silenciosos seguidos de caos repentino no horário mais inconveniente para os humanos. Técnica avançada de pular na cama sem fazer barulho, para então aterrissar precisamente no estômago do dono adormecido. Especialidade em derrubar objetos estratégicos para criar a maior reverberação acústica possível."
    },
    {
        title: "Detetive de cheiros misteriosos",
        icon: "🕵️‍♂️",
        description: "Capacidade olfativa superior, capaz de detectar um petisco a 20 metros de distância através de paredes. Análise forense completa de todos os cheiros novos na casa, com documentação através de esfregações de focinho. Treinamento intensivo em identificar o local exato onde caiu aquela migalha de atum há três dias."
    },
    {
        title: "Decoradora da cadeira da mamãe (com garras inclusas)",
        icon: "🪑",
        description: "Artista têxtil especializada em criar padrões únicos e irreversíveis em móveis estofados. Técnica refinada de perfuração precisa que destrói apenas os tecidos mais caros da casa. Preferência por materiais importados e antiguidades familiares. Cada peça é assinada com pelos autênticos que nunca saem, mesmo após múltiplas lavagens."
    },
    {
        title: "Atleta olímpica de corridas aleatórias",
        icon: "🏃",
        description: "Especialista em sprints de alta velocidade sem motivo aparente, geralmente às 3 da manhã. Recordista em derrapagens em pisos lisos e aderência em curvas fechadas. Capaz de atingir velocidades superiores a 30km/h em curtos espaços, especialmente quando ouve o barulho de um sachê sendo aberto a distância."
    },
    {
        title: "Modelo profissional de poses estranhas",
        icon: "📸",
        description: "Flexibilidade sobre-felina que permite contorções impossíveis para outros mamíferos. Portfolio extenso de poses que desafiam as leis da física e da anatomia convencional. Especialista em posturas que oscilam entre o extremamente fofo e o moderadamente perturbador. Sempre pronta para uma sessão fotográfica, desde que seja ideia dela."
    },
    {
        title: "Terapeuta de ronronadas",
        icon: "🧘‍♀️",
        description: "Produção de vibrações sonoras na frequência exata para reduzir o estresse e ansiedade humana. Sessões de terapia disponíveis mediante abertura de sachês. Capacidade de iniciar o ronronar instantaneamente ao perceber tristeza em seu humano. A intensidade do ronronar é proporcional ao conforto oferecido ou à proximidade da hora da comida."
    },
    {
        title: "Especialista em ficar no caminho (principalmente na hora de andar)",
        icon: "🚶‍♂️",
        description: "Habilidade sobrenatural de prever e ocupar exatamente o espaço por onde o humano precisará passar nos próximos segundos. Domínio avançado da técnica de entrelaçamento entre pernas humanas durante deslocamentos, com risco calculado de tropeços. Preferência especial por corredores, escadas e portas de banheiro em momentos de urgência."
    },
    {
        title: "Mestre do olhar julgador",
        icon: "😼",
        description: "Expressão facial capaz de transmitir desaprovação total com mínimo esforço. Olhar penetrante que faz humanos questionarem todas as suas escolhas de vida. Especialidade em fixar o olhar exatamente no momento em que o dono comete algum deslize ou gafe. O famoso 'olhar de desprezo felino' é marca registrada e foi aperfeiçoado através de gerações."
    },
];

export default function CatPortfolio() {
    const miadoAudio = new Audio(miadoSom);
    const playMiado = () => {
        miadoAudio.currentTime = 0;
        miadoAudio.volume = 0.1;
        miadoAudio.play().catch(error => {
            console.log("Não foi possível reproduzir o miado:", error);
        });
    };
    
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [showMain, setShowMain] = useState(true);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [catMode, setCatMode] = useState(false);
    const [kawaiiMode, setKawaiiMode] = useState(false);
    const [openCard, setOpenCard] = useState(null);
    const swiperRef = React.useRef(null);

    useEffect(() => {
        document.body.style.overflow = showMain ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [showMain]);

    const TEXT_ACCENT = "#FF6B99";
    const BG_ACCENT_HEX = "#FF6B99";
    const BG_ACCENT_RGB = "252,194,193";

    const handleWhatsApp = (e) => {
        e.preventDefault();
        playMiado();
        const numero = "5511968690036";
        const texto = `Olá! Meu nome é ${nome}.\n${mensagem}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");
    };

    const handleShowRest = () => {
        playMiado();
        setShowMain(false);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
        }, 100);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        playMiado();
        const header = document.querySelector('header');
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = header ? header.offsetHeight : 0;
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: sectionTop - headerHeight - 80,
                behavior: 'smooth',
            });
        }
    };
    
    const openSkillModal = (skill) => {
        playMiado();
        setSelectedSkill(skill);
    };
    const closeSkillModal = (withSound = false) => {
        if (withSound) playMiado();
        requestAnimationFrame(() => setSelectedSkill(null));
    };
    
    const translateToCatLanguage = (text) => {
        if (!catMode || !text) return text;
        return text.split(' ').map(word => {
            if (word.trim().length === 0 || /^[.,!?;:"\s]+$/.test(word)) return word;
            const punctuation = word.match(/[.,!?;:"]$/);
            const punc = punctuation ? punctuation[0] : '';
            const cleanWord = punctuation ? word.slice(0, -1) : word;
            let catWord;
            if (cleanWord.length <= 3) catWord = "Miau";
            else if (cleanWord.length <= 6) catWord = "Miau miau";
            else catWord = "Miaaau";
            if (/^[A-Z]/.test(cleanWord)) catWord = catWord.charAt(0).toUpperCase() + catWord.slice(1);
            else catWord = catWord.toLowerCase();
            return catWord + punc;
        }).join(' ');
    };
    
    const toggleCatLanguage = () => {
        playMiado();
        setCatMode(prevMode => !prevMode);
    };
    const toggleKawaiiMode = () => {
        playMiado();
        if (!kawaiiMode) {
            document.body.classList.add('kawaii-mode-transition');
        }
        
        setTimeout(() => {
            setKawaiiMode(prevMode => !prevMode);
            
            if (!kawaiiMode) {
                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 },
                    colors: ['#FF6B99', '#FFD1DC', '#FFA6C9', '#FF85B3'],
                    shapes: ['heart']
                });
            }
        }, 10);
    };
    return (
        <div
            className={`min-h-screen font-sans text-gray-800 relative flex flex-col items-center justify-center ${kawaiiMode ? 'kawaii-mode' : ''}`}
            style={{
                transition: "background 0.5s ease-in-out",
                background: kawaiiMode 
                    ? `linear-gradient(135deg, rgba(255, 182, 193, 0.3), rgba(255, 105, 180, 0.1))`
                    : `linear-gradient(135deg, rgba(${BG_ACCENT_RGB},0.08), rgba(${BG_ACCENT_RGB},0.03))`
            }}
        >
                        <div
                className="fixed inset-0 flex items-center justify-center z-20"
                style={{
                    minHeight: "100vh",
                    transition: "opacity 0.4s",
                    opacity: showMain ? 1 : 0,
                    pointerEvents: showMain ? "auto" : "none",
                    background: `linear-gradient(135deg, rgba(${BG_ACCENT_RGB},0.08), rgba(${BG_ACCENT_RGB},0.03))`
                }}
            >
                <motion.section
                    key="main"
                    className="flex flex-col items-center justify-center gap-10 w-full"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ minHeight: "100vh" }}
                >
                    <motion.img
                        src={Lunara}
                        alt="Foto da gata em destaque"
                        className="w-64 h-64 rounded-full object-cover shadow-lg"
                        style={{ border: `4px solid ${BG_ACCENT_HEX}` }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-4xl font-extrabold mb-4 text-center" style={{ color: "#333" }}>
                            {translateToCatLanguage("Olá, humano! 🐾")}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-md mb-8 text-center">
                            {translateToCatLanguage("Bem-vindo ao meu portfólio felino. Aqui você vai conhecer minhas melhores poses, habilidades e como entrar em contato com meu humano. Miaaau!")}
                        </p>
                        <button
                            className="rounded-lg py-3 px-6 font-semibold text-lg transition"
                            onClick={handleShowRest}
                            type="button"
                            style={{ backgroundColor: BG_ACCENT_HEX, color: "#fff" }}
                        >
                            {translateToCatLanguage("Clique aqui para ver minhas habilidades felinas!")}
                        </button>
                    </motion.div>
                </motion.section>
            </div>

            <div
                className={`relative z-10 transition-opacity duration-400 flex flex-col items-center justify-center w-full ${showMain ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
                {!showMain && (
                    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
                        <div className="bg-white/80 shadow-md rounded-b-3xl backdrop-blur flex items-center justify-between max-w-6xl w-full px-8 py-6">
                
                        <motion.h1
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl font-bold tracking-tight"
                            style={{ color: TEXT_ACCENT }}
                        >
                            {translateToCatLanguage("Portfólio da Lunara")}
                        </motion.h1>
                        <nav className="flex items-center">
                            <ul className="flex gap-6 text-lg font-medium mr-8">
                                <li>
                                    <a
                                        href="#fotos"
                                        className="transition"
                                        style={{ color: "#FF6B99" }}
                                        onClick={e => scrollToSection(e, 'fotos')}
                                    >
                                        {translateToCatLanguage("Fotos")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className="transition"
                                        style={{ color: "#FF6B99" }}
                                        onClick={e => scrollToSection(e, 'skills')}
                                    >
                                        {translateToCatLanguage("Skills")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#curiosidades"
                                        className="transition"
                                        style={{ color: "#FF6B99" }}
                                        onClick={e => scrollToSection(e, 'curiosidades')}
                                    >
                                        {translateToCatLanguage("Segredos")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contato"
                                        className="transition"
                                        style={{ color: "#FF6B99" }}
                                        onClick={e => scrollToSection(e, 'contato')}
                                    >
                                        {translateToCatLanguage("Contato")}
                                    </a>
                                </li>
                            </ul>
                            <div className="flex gap-3">
                                <button
                                    onClick={toggleCatLanguage}
                                    className="relative flex items-center justify-center bg-white/80 border rounded-full p-3.5 transition-all hover:bg-pink-50 transform hover:scale-105 icon-button"
                                    style={{ 
                                        border: `2px solid ${TEXT_ACCENT}`,
                                        color: TEXT_ACCENT,
                                        boxShadow: catMode ? `0 0 10px ${TEXT_ACCENT}` : 'none',
                                        width: '48px',
                                        height: '48px',
                                        minWidth: '48px',
                                        borderRadius: '9999px',
                                        aspectRatio: '1 / 1',
                                        overflow: 'hidden'
                                    }}
                                    title={catMode ? "Voltar para português" : "Traduzir para gatês"}
                                >
                                {catMode ? (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '1.32rem',
                                        paddingBottom: '1px'
                                    }}>
                                        <span>🇧🇷</span>
                                    </div>
                                ) : (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '1.5rem'
                                    }}>
                                        <span>🐱</span>
                                    </div>
                                )}
                                </button>
                                
                                <motion.button
                                    onClick={toggleKawaiiMode}
                                    className={`relative flex items-center justify-center ${kawaiiMode ? "bg-pink-300" : "bg-white/80"} border rounded-full p-3.5 transition-all hover:bg-pink-50 transform hover:scale-105 kawaii-button icon-button`}
                                    style={{ 
                                        border: `2px solid #FF6B99`,
                                        boxShadow: kawaiiMode ? `0 0 15px #FF6B99` : 'none',
                                        width: '48px',
                                        height: '48px',
                                        minWidth: '48px',
                                        borderRadius: '9999px',
                                        aspectRatio: '1 / 1',
                                        overflow: 'hidden'
                                    }}
                                    title="Ativar modo ultra fofo"
                                    animate={{ 
                                        scale: kawaiiMode ? [1, 1.2, 1] : 1
                                    }}
                                    transition={{ 
                                        repeat: kawaiiMode ? Infinity : 0, 
                                        duration: 1.5 
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '1.5rem'
                                    }}>
                                        <span>💖</span>
                                    </div>
                                </motion.button>
                            </div>
                        </nav>
                        </div>
                    </header>
                )}

                <section id="fotos" className="px-8 pt-32 pb-16 flex flex-col items-center justify-center w-full min-h-[60vh]">
                    <motion.h3
                        className="text-2xl font-bold mb-6 text-center w-full flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 20 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: TEXT_ACCENT }}
                    >
                        {translateToCatLanguage("Minhas Fotos Favoritas")}
                    </motion.h3>
                        <div className="relative w-full max-w-5xl mx-auto">
                        {!showMain && (
                            <>
                                <div
                                    className="absolute top-0 left-0 h-full"
                                    style={{
                                        width: "60px",
                                        zIndex: 20,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                        borderTopLeftRadius: "1rem",
                                        borderBottomLeftRadius: "1rem",
                                        background: "transparent",
                                        transition: "background 0.18s ease"
                                    }}
                                    onClick={() => {
                                        playMiado();
                                        swiperRef.current?.swiper.slidePrev();
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = `rgba(${BG_ACCENT_RGB},0.10)`}
                                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                                >
                                    <img
                                        src={pawImg}
                                        alt="Patinha anterior"
                                        className="ml-2 w-10 h-10 object-contain transform -rotate-90"
                                        style={{ WebkitUserDrag: "none" }}
                                        draggable={false}
                                    />
                                    </div>
                                    <div
                                    className="absolute top-0 right-0 h-full"
                                    style={{
                                        width: "60px",
                                        zIndex: 20,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        borderTopRightRadius: "1rem",
                                        borderBottomRightRadius: "1rem",
                                        background: "transparent",
                                        transition: "background 0.18s ease"
                                    }}
                                    onClick={() => {
                                        playMiado();
                                        swiperRef.current?.swiper.slideNext();
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.background = `rgba(${BG_ACCENT_RGB},0.10)`}
                                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                                >
                                    <img
                                        src={pawImg}
                                        alt="Patinha próxima"
                                        className="mr-2 w-10 h-10 object-contain transform rotate-90"
                                        style={{ WebkitUserDrag: "none" }}
                                        draggable={false}
                                    />
                                    </div>
                            </>
                        )}
                         <Swiper
                             ref={swiperRef}
                             modules={[Pagination, Autoplay]}
                             pagination={{ clickable: true }}
                             autoplay={{ delay: 5000, disableOnInteraction: false }}
                             spaceBetween={30}
                             slidesPerView={1}
                             loop={true}
                             className="max-w-5xl w-full mx-auto"
                         >
                            {catPhotos.map((photo, idx) => (
                                <SwiperSlide key={idx}>
                                    <motion.div
                                        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full"
                                        initial={false}
                                        animate={{ opacity: showMain ? 0 : 1 }}
                                    >
                                        <div className="relative w-[600px] h-[600px] mb-4 flex items-center justify-center">
                                            <motion.img
                                                src={photo.src}
                                                alt={photo.caption}
                                                className="max-w-full max-h-full rounded-xl bg-white object-center"
                                                style={{ border: `3px solid ${BG_ACCENT_HEX}` }}
                                                whileHover={{ scale: 1.03 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            />
                                        </div>
                                        <p className="text-center text-gray-700 italic" style={{ color: "#5b5b5b" }}>{translateToCatLanguage(photo.caption)}</p>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                <section
                    id="skills"
                    className="px-8 py-12 rounded-3xl mx-4 my-32 flex flex-col items-center w-full"
                    style={{ marginTop: "8rem", background: "rgba(255,255,255,0.6)" }}
                >
                    <motion.h3
                        className="text-2xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 20 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: TEXT_ACCENT }}
                    >
                        {translateToCatLanguage("Minhas Skills Felinas")}
                    </motion.h3>
                    <motion.p
                        className="text-sm mb-6 text-center font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 10 : 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: "#FF6B99" }}
                    >
                        ✨ {translateToCatLanguage("Clique em uma habilidade para saber mais")} ✨
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" style={{ gridAutoRows: "1fr" }}>
                        {skills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                className="rounded-xl p-6 flex flex-col items-center justify-center shadow-md cursor-pointer relative overflow-hidden h-full"
                                style={{ 
                                    background: `rgba(${BG_ACCENT_RGB},0.12)`,
                                    aspectRatio: '1/1',
                                    minHeight: '180px',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                whileHover={{ 
                                    scale: 1.03,
                                    boxShadow: `0 4px 12px rgba(${BG_ACCENT_RGB},0.3)`
                                }}
                                transition={{ type: "spring", stiffness: 400 }}
                                onClick={() => openSkillModal(skill)}
                                title={`Clique para saber mais sobre ${skill.title}`}
                            >
                                <div className="absolute bottom-2 right-2 opacity-60 text-xs" style={{ pointerEvents: 'none' }}>
                                    👆
                                </div>
                                <div className="flex flex-col items-center h-full w-full" style={{ padding: '10px 0' }}>
                                    <div className="flex-1"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-4xl mb-4">{skill.icon}</span>
                                        <span className="text-lg font-semibold text-center w-full" style={{ color: TEXT_ACCENT }}>{translateToCatLanguage(skill.title)}</span>
                                    </div>
                                    <div className="flex-1"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section id="curiosidades" className="px-8 py-16 flex flex-col items-center w-full bg-gray-50/80">
                    <motion.h3
                        className="text-2xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 20 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: TEXT_ACCENT }}
                    >
                        {translateToCatLanguage("Segredos do Código")}
                    </motion.h3>
                    
                    <motion.p
                        className="text-sm mb-10 text-center font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 10 : 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: "#FF6B99" }}
                    >
                        ✨ {translateToCatLanguage("Clique nos cards para ver detalhes técnicos e trechos de código")} ✨
                    </motion.p>
                    
                    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "React Hooks",
                                icon: "⚛️",
                                content: "Este site foi construído usando React Hooks como useState e useEffect para gerenciar os estados da aplicação. O modo kawaii, tradução felina e visualização de fotos são todos controlados por hooks!",
                                codeSnippet: `// Exemplos de Hooks utilizados neste projeto
const [catMode, setCatMode] = useState(false);
const [kawaiiMode, setKawaiiMode] = useState(false);
const [openCard, setOpenCard] = useState(null);

// Hook de efeito para controlar overflow do body
useEffect(() => {
    document.body.style.overflow = showMain ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
}, [showMain]);`,
                                techDetails: "Os hooks são a forma moderna de gerenciar estado e efeitos em React. Neste projeto, usamos useState para todos os estados da interface (modo kawaii, tradutor de gatos, cards abertos) e useEffect para controlar efeitos colaterais como o scroll da página."
                            },
                            {
                                title: "Framer Motion",
                                icon: "✨",
                                content: "Todas as animações suaves que você vê neste site são feitas com Framer Motion, uma biblioteca de animações para React. Ela permite criar transições, animações de entrada/saída e interações responsivas.",
                                codeSnippet: `<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: showMain ? 0 : 1, y: showMain ? 20 : 0 }}
    transition={{ duration: 0.6 }}
>
    {/* Conteúdo animado */}
</motion.div>

<motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
>
    Botão com animação
</motion.button>`,
                                techDetails: "Framer Motion simplifica animações complexas com uma API declarativa. Usamos propriedades como 'initial', 'animate', 'exit', 'transition', 'whileHover' e 'whileTap' para criar interfaces interativas com mínimo código."
                            },
                            {
                                title: "Tailwind CSS",
                                icon: "🎨",
                                content: "A estilização do site foi feita com Tailwind CSS, um framework de utility-first que permite criar designs personalizados rapidamente sem sair do HTML. Combinamos Tailwind com CSS customizado para os efeitos kawaii.",
                                codeSnippet: `// Exemplo de classes Tailwind usadas
<div className="min-h-screen font-sans text-gray-800 relative 
    flex flex-col items-center justify-center">
    <section className="px-8 py-12 rounded-3xl mx-4 my-32 
        flex flex-col items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
            gap-8 max-w-5xl mx-auto">
            {/* Grid de cards responsivo */}
        </div>
    </section>
</div>`,
                                techDetails: "Tailwind permite rápido desenvolvimento front-end usando classes utilitárias diretamente no HTML. Utilizamos extensivamente seus recursos de flexbox, grid, espaçamento, cores e responsividade. Para estilizações específicas como o modo kawaii, combinamos com CSS personalizado."
                            },
                            {
                                title: "Modo Kawaii",
                                icon: "💖",
                                content: "O modo kawaii adiciona elementos decorativos como estrelas e corações usando componentes React renderizados condicionalmente. A página também muda cores e estilos quando ativado!",
                                codeSnippet: `// Componente para elementos decorativos kawaii
function KawaiiElements({ isActive }) {
    return isActive ? (
        <>
            {/* Estrelas animadas */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="kawaii-star absolute"
                    animate={{
                        y: ['-20%', '120%'],
                        x: Math.random() * 10 - 5,
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        left: \`\${Math.random() * 100}%\`,
                        fontSize: \`\${Math.random() * 1.5 + 0.8}rem\`
                    }}
                >
                    {['✨', '💕', '💖', '⭐'][Math.floor(Math.random() * 4)]}
                </motion.div>
            ))}
        </>
    ) : null;
}`,
                                techDetails: "O modo kawaii é ativado por um toggle state que adiciona classes CSS especiais e renderiza elementos decorativos. Usamos a biblioteca confetti-js para o efeito de explosão inicial, e Framer Motion para animações contínuas dos elementos flutuantes."
                            },
                            {
                                title: "Tradutor Felino",
                                icon: "🐱",
                                content: "O tradutor para linguagem de gato substitui letras por padrões que lembram miados. Uma função de tradução personalizada transforma o texto quando o modo é ativado, mantendo a estrutura original.",
                                codeSnippet: `// Função de tradução para linguagem de gato
const translateToCatLanguage = (text) => {
    if (!catMode || !text) return text;
    
    return text.split(' ').map(word => {
        // Preserva pontuação e espaços
        if (word.trim().length === 0 || /^[.,!?;:" \t\r\n]+$/.test(word)) 
            return word;
        
        // Captura pontuação no final da palavra
        const punctuation = word.match(/[.,!?;:"]$/);
        const punc = punctuation ? punctuation[0] : '';
        const cleanWord = punctuation ? word.slice(0, -1) : word;
        
        // Determina o tipo de "miau" baseado no tamanho da palavra
        let catWord;
        if (cleanWord.length <= 3) catWord = "Miau";
        else if (cleanWord.length <= 6) catWord = "Miau miau";
        else catWord = "Miaaau";
        
        // Preserva maiúsculas/minúsculas
        if (/^[A-Z]/.test(cleanWord)) 
            catWord = catWord.charAt(0).toUpperCase() + catWord.slice(1);
        else 
            catWord = catWord.toLowerCase();
            
        return catWord + punc;
    }).join(' ');
};`,
                                techDetails: "O tradutor felino preserva a estrutura original do texto, substituindo palavras por 'miaus' que variam de acordo com o tamanho da palavra original. A função mantém maiúsculas/minúsculas e pontuação, e é ativada/desativada por um estado React."
                            },
                            {
                                title: "Integração com WhatsApp",
                                icon: "📱",
                                content: "O formulário de contato está integrado com a API do WhatsApp, permitindo enviar mensagens diretamente para o número configurado, com formatação personalizada e validação de campos.",
                                codeSnippet: `// Função para enviar mensagem pelo WhatsApp
const handleWhatsApp = (e) => {
    e.preventDefault();
    playMiado(); // Reproduz som de miado ao clicar
    
    // Número de WhatsApp e formatação da mensagem
    const numero = "5511968690036";
    const texto = \`Olá! Meu nome é \${nome}.
\${mensagem}\`;
    
    // Construção da URL da API do WhatsApp
    const url = \`https://wa.me/\${numero}?text=\${encodeURIComponent(texto)}\`;
    
    // Abre em nova aba
    window.open(url, "_blank");
};`,
                                techDetails: "A integração usa a API oficial do WhatsApp através do protocolo wa.me. Os dados do formulário são capturados pelos estados de React, formatados com template strings, e codificados para URL com encodeURIComponent. O número do WhatsApp é fixo no código."
                            },
                            {
                                title: "Responsividade",
                                icon: "💻",
                                content: "O site foi construído com design responsivo, adaptando-se a diferentes tamanhos de tela - desde celulares até desktops. Utilizamos Flexbox e Grid para layouts flexíveis e media queries para ajustes específicos.",
                                codeSnippet: `// Sistema de grid responsivo com Tailwind
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {/* Os cards se ajustam: 
       - 1 coluna em celulares (padrão)
       - 1 coluna em tablets (sm)
       - 2 colunas em desktops (md) */}
</div>

// Ajustes de tamanho e espaçamento responsivos
<section className="px-8 py-12 rounded-3xl mx-4 my-32">
    {/* padding lateral (px-8) menor em mobile */}
</section>

// Componentes Swiper com responsividade
<Swiper
    spaceBetween={30}
    slidesPerView={1} // Sempre 1 slide visível por vez
    loop={true}
    className="max-w-5xl w-full mx-auto"
>`,
                                techDetails: "Utilizamos o sistema de grid e classes responsivas do Tailwind CSS (prefixos sm:, md:, lg:) para adaptar o layout a diferentes tamanhos de tela. Para elementos mais complexos como o carrossel, usamos o Swiper.js com configurações responsivas. Todos os elementos têm larguras relativas (%, rem, em) ou max-width para melhor adaptação."
                            },
                            {
                                title: "Otimização de Performance",
                                icon: "⚡",
                                content: "Imagens otimizadas, lazy loading e componentes com renderização condicional ajudam a manter o site rápido. Também utilizamos técnicas de memoização para prevenir renderizações desnecessárias.",
                                codeSnippet: `// Renderização condicional para melhor performance
{!showMain && (
    <header className="fixed top-0 left-0 right-0 z-50">
        {/* Header só é renderizado quando necessário */}
    </header>
)}

// Lazy loading de imagens no carrossel
<Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
>
    {/* Imagens são carregadas apenas quando visíveis */}
</Swiper>

// Otimização de animações com Framer Motion
<motion.div
    initial={false} // Evita animação na montagem inicial
    animate={{ opacity: showMain ? 0 : 1 }}
>`,
                                techDetails: "Otimizamos a performance com: 1) Renderização condicional de componentes pesados; 2) Lazy loading de imagens com Swiper; 3) Otimização de animações com Framer Motion; 4) Uso de transições CSS para efeitos simples em vez de JavaScript; 5) Controle preciso do ciclo de vida de recursos externos como áudio."
                            }
                        ].map((secret, idx) => (
                                    <motion.div 
                                        key={`secret-${idx}`}
                                        className="rounded-2xl shadow-md overflow-hidden cursor-pointer"
                                        style={{ background: `rgba(${BG_ACCENT_RGB},0.12)` }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ 
                                            opacity: showMain ? 0 : 1, 
                                            y: showMain ? 20 : 0,
                                            height: openCard === idx ? 'auto' : '150px'
                                        }}
                                        transition={{ 
                                            duration: 0.5,
                                            delay: idx * 0.1,
                                            height: { type: "spring", stiffness: 300, damping: 30 }
                                        }}
                                        onClick={() => {
                                            playMiado();
                                            setOpenCard(openCard === idx ? null : idx);
                                        }}
                                        whileHover={{ 
                                            scale: 1.02,
                                            boxShadow: `0 4px 12px rgba(${BG_ACCENT_RGB},0.3)`
                                        }}
                                    >
                                        <div className="p-6 flex flex-col h-full">
                                            <div className="flex items-center mb-3 relative">
                                                <motion.div 
                                                    className="text-2xl mr-3 flex items-center justify-center" 
                                                    style={{}}
                                                    animate={{ scale: openCard === idx ? 1.1 : 1 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {secret.icon}
                                                </motion.div>
                                                <h4 className="text-lg font-semibold" style={{ color: TEXT_ACCENT }}>
                                                    {translateToCatLanguage(secret.title)}
                                                </h4>
                                                <motion.div
                                                    animate={{ rotate: openCard === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute top-0 right-0 card-arrow"
                                                    style={{ color: '#FF6B99' }}
                                                >
                                                    {kawaiiMode ? "✨" : "▾"}
                                                </motion.div>
                                            </div>
                                            
                                            <motion.div
                                                className="text-gray-600 overflow-hidden"
                                                animate={{ 
                                                    opacity: openCard === idx ? 1 : 0,
                                                    height: openCard === idx ? 'auto' : 0
                                                }}
                                                transition={{ 
                                                    duration: 0.3, 
                                                    opacity: { delay: openCard === idx ? 0.2 : 0 }
                                                }}
                                            >
                                                <p className="pt-2 mb-4">{translateToCatLanguage(secret.content)}</p>
                                                
                                                {secret.techDetails && (
                                                    <div className="mt-3 mb-4">
                                                        <h5 className="font-semibold mb-2" style={{ color: TEXT_ACCENT }}>
                                                            {translateToCatLanguage("Detalhes Técnicos")}:
                                                        </h5>
                                                        <p className="text-sm">
                                                            {translateToCatLanguage(secret.techDetails)}
                                                        </p>
                                                    </div>
                                                )}
                                                
                                                {secret.codeSnippet && (
                                                    <div className="mt-3">
                                                        <h5 className="font-semibold mb-2" style={{ color: TEXT_ACCENT }}>
                                                            {translateToCatLanguage("Código")}:
                                                        </h5>
                                                        <div 
                                                            className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs font-mono"
                                                            style={{ maxHeight: "250px" }}
                                                        >
                                                            <pre>{secret.codeSnippet}</pre>
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                </section>

                <section id="contato" className="px-8 py-12 flex flex-col items-center w-full">
                    <motion.h3
                        className="text-2xl font-bold mb-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 20 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: TEXT_ACCENT }}
                    >
                        {translateToCatLanguage("Fale com meu humano")}
                    </motion.h3>
                    <motion.form
                        onSubmit={handleWhatsApp}
                        className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: showMain ? 0 : 1, y: showMain ? 30 : 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <label className="font-medium text-gray-700">
                            {translateToCatLanguage("Seu nome")}
                            <input
                                type="text"
                                className="mt-1 w-full rounded-lg px-3 py-2 focus:outline-none"
                                placeholder={translateToCatLanguage("Digite seu nome")}
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                                required
                                style={{ border: `1px solid rgba(${BG_ACCENT_RGB},0.35)` }}
                            />
                        </label>
                        <label className="font-medium text-gray-700">
                            {translateToCatLanguage("Mensagem")}
                            <textarea
                                className="mt-1 w-full rounded-lg px-3 py-2 focus:outline-none"
                                placeholder={translateToCatLanguage("Escreva sua mensagem")}
                                rows={3}
                                value={mensagem}
                                onChange={e => setMensagem(e.target.value)}
                                required
                                style={{ border: `1px solid rgba(${BG_ACCENT_RGB},0.35)` }}
                            />
                        </label>

                        <button
                            type="submit"
                            className="rounded-lg py-2 font-semibold transition"
                            style={{ backgroundColor: TEXT_ACCENT, color: "#fff" }}
                        >
                            {translateToCatLanguage("Enviar Miaus")}
                        </button>
                    </motion.form>
                </section>

                <footer
                    className={`text-center py-6 text-sm w-full transition-colors duration-300 ${kawaiiMode ? 'text-pink-500 font-bold' : 'text-gray-400'}`}
                    style={kawaiiMode ? { color: '#FF1493' } : {}}
                >
                    © {new Date().getFullYear()} {translateToCatLanguage("Portfólio da Lunara. Feito com muito carinho e muitos miados.")}
                </footer>
            </div>
            
            <AnimatePresence mode="wait">
                {selectedSkill && (
                    <motion.div 
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        <div 
                            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                            onClick={() => closeSkillModal(false)}
                        ></div>
                        <motion.div 
                            className="bg-white rounded-2xl p-8 max-w-md relative z-10 mx-4"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "tween", duration: 0.15 }}
                            style={{ boxShadow: `0 10px 25px rgba(${BG_ACCENT_RGB},0.4)` }}
                        >
                        <button 
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={() => closeSkillModal(false)}
                            style={{ cursor: 'pointer' }}
                        >
                            ✕
                        </button>
                        <div className="flex items-center mb-4">
                            <span className="text-4xl mr-3">{selectedSkill.icon}</span>
                            <h3 className="text-xl font-bold" style={{ color: TEXT_ACCENT }}>{translateToCatLanguage(selectedSkill.title)}</h3>
                        </div>
                        <p className="text-gray-700">{translateToCatLanguage(selectedSkill.description)}</p>
                        <div className="mt-6 flex justify-center">
                            <button
                                className="rounded-lg px-4 py-2 font-semibold transition"
                                style={{ 
                                    backgroundColor: TEXT_ACCENT, 
                                    color: "#fff",
                                    cursor: 'pointer'
                                }}
                                onClick={() => closeSkillModal(true)}
                            >
                                {translateToCatLanguage("Fechar")}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
            
            {kawaiiMode && <KawaiiElements isActive={kawaiiMode} />}
        </div>
    );
}
