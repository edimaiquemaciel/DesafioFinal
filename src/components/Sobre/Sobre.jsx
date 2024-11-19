import loja from "../../assets/loja.png";
import { SectionSobre } from "./Sobre.styled";
import Button from "../Button/Button";
import { TextContent, H3, H2, Paragrafo } from "../../globalStyle";
export default function Sobre(){
    return(
        <SectionSobre>
            <img src={loja} alt="Frente da loja StarBucks" />
            <TextContent>
                <div>
                    <H3>PREPARAÇÃO</H3>
                    <H2>Níveis de torra</H2>
                </div>
                <Paragrafo>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</Paragrafo>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextContent>
        </SectionSobre>
    )
}