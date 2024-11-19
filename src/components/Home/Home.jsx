import { SectionHome, TextHome, Circulo, ContainerCopoBtn, CopoImg, H3, H2, Paragrafo, MiniCopoBtn, RedeSocial } from "./Home.styled"
import Button from "../Button/Button";
import copoLaranja from "../../assets/laranja.png"
import copoVermelho from "../../assets/vermelho.png"
import copoAmarelo from "../../assets/amarelo.png"
import laranjaBtn from "../../assets/laranja-btn.png"
import vermelhoBtn from "../../assets/vermelho-btn.png"
import amareloBtn from "../../assets/amarelo-btn.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/fb.png"
import instagram from "../../assets/instagram.png"
import { useState } from "react";
import { ins } from "framer-motion/client";

export default function Home(){
    const [copo, setCopo] = useState(copoLaranja);
    const [backgroundColor, setBackgroundColor] = useState("#017143")

    const mudarCopoLaranja = () =>{
        setCopo(copoLaranja);
        setBackgroundColor("#017143");
    }
    const mudarCopoVermelho = () =>{
        setCopo(copoVermelho);
        setBackgroundColor("#97090C");
    }
    const mudarCopoAmarelo = () =>{
        setCopo(copoAmarelo);
        setBackgroundColor("#DECD13");
    }


    return(
        <SectionHome>
            <CopoImg src={copo} alt="Copo Laranja" />
            <TextHome>
                <div>
                    <H3>Mais que Café</H3>
                    <H2>Isso  é <span>Starbucks</span></H2>
                </div>
                <Paragrafo>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</Paragrafo>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextHome>
            <ContainerCopoBtn>
                <MiniCopoBtn onClick={mudarCopoLaranja} src={laranjaBtn} alt="Mini Copo laranja" />
                <MiniCopoBtn onClick={mudarCopoVermelho} src={vermelhoBtn} alt="Mini Copo vermelho" />
                <MiniCopoBtn onClick={mudarCopoAmarelo} src={amareloBtn} alt="Mini Copo amarelo" />
            </ContainerCopoBtn>
            <Circulo $backgroundColor={backgroundColor}/>
            <RedeSocial>
                <a href="https://www.facebook.com/StarbucksBrasil" target="_blank"><img src={facebook} alt="Facebook"/></a>
                <a href="https://x.com/starbucks" target="_blank"><img src={twitter} alt="Twitter" /></a>
                <a href="https://www.instagram.com/starbucksbrasil/" targe="_blank"><img src={instagram} alt="Instagram" /></a>
            </RedeSocial>
        </SectionHome>

    )
}