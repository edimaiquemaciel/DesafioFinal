import { SectionHome, TextHome, Button, Circulo, ContainerCopoBtn, CopoImg } from "../../Style";
import copoLaranja from "../../assets/laranja.png"
import copoVermelho from "../../assets/vermelho.png"
import copoAmarelo from "../../assets/amarelo.png"
import laranjaBtn from "../../assets/laranja-btn.png"
import vermelhoBtn from "../../assets/vermelho-btn.png"
import amareloBtn from "../../assets/amarelo-btn.png"
import { useState } from "react";

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
                    <h3>Mais que Café</h3>
                    <h2>Isso  é <span>Starbucks</span></h2>
                </div>
                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextHome>
            <ContainerCopoBtn>
                <img onClick={mudarCopoLaranja} src={laranjaBtn} alt="Mini Copo laranja" />
                <img onClick={mudarCopoVermelho} src={vermelhoBtn} alt="Mini Copo vermelho" />
                <img onClick={mudarCopoAmarelo} src={amareloBtn} alt="Mini Copo amarelo" />
            </ContainerCopoBtn>
            <Circulo backgroundColor={backgroundColor}/>
        </SectionHome>

    )
}