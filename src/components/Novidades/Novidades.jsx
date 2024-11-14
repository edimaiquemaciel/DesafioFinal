import { SectionNovidades, TextNovidades, Button } from "../../Style";
import graoCafe from "../../assets/grao_cafe.png"

export default function Novidades(){
    return(
        <SectionNovidades>
            <img src={graoCafe} alt="Grão de Café" />
            <TextNovidades>
                <div>
                    <h3>PREPARAÇÃO</h3>
                    <h2>Níveis de torra</h2>
                </div>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <Button><a href="https://www.starbucksathome.com/br/blog/niveis-de-torra.html" target="_blank">SAIBA MAIS</a></Button>
            </TextNovidades>
        </SectionNovidades>
    )
}