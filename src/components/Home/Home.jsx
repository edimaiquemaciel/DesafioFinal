import { SectionHome, TextHome, Button, Circulo, ContainerCopoBtn, CopoImg } from "../../Style";
import copoLaranja from "../../assets/laranja.png"
import laranjaBtn from "../../assets/laranja-btn.png"
import vermelhoBtn from "../../assets/vermelho-btn.png"
import amareloBtn from "../../assets/amarelo-btn.png"

export default function Home(){
    return(
        <SectionHome>
            <CopoImg src={copoLaranja} alt="Copo Laranja" />
            <TextHome>
                <div>
                    <h3>Mais que Café</h3>
                    <h2>Isso  é <span>Starbucks</span></h2>
                </div>
                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextHome>
            <ContainerCopoBtn>
                <img src={laranjaBtn} alt="Mini Copo laranja" />
                <img src={vermelhoBtn} alt="Mini Cpo vermelho" />
                <img src={amareloBtn} alt="Mini Copo amarelo" />
            </ContainerCopoBtn>
            <Circulo/>
        </SectionHome>

    )
}