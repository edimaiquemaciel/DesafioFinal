import loja from "../../assets/loja.png";
import { TextSobre, Button, SectionSobre } from "../../Style";
export default function Sobre(){
    return(
        <SectionSobre>
            <img src={loja} alt="Frente da loja StarBucks" />
            <TextSobre>
                <div>
                    <h3>PREPARAÇÃO</h3>
                    <h2>Níveis de torra</h2>
                </div>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextSobre>
        </SectionSobre>
    )
}