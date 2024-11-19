import { SectionNovidades, TextNovidades } from "./Novidades.styled";
import { H3, H2, Paragrafo } from "../../globalStyle";
import Button from "../Button/Button";
import graoCafe from "../../assets/grao_cafe.png"

export default function Novidades(){
    return(
        <SectionNovidades>
            <img src={graoCafe} alt="Grão de Café" />
            <TextNovidades>
                <div>
                    <H3>PREPARAÇÃO</H3>
                    <H2>Níveis de torra</H2>
                </div>
                <Paragrafo>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</Paragrafo>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextNovidades>
        </SectionNovidades>
    )
}