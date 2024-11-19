import logo from "../../assets/logo.png";
import { HeaderContainer, StyledLink, Ul } from "./Header.styled";
export default function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logomarca StarBucks" />
            <nav>
                <Ul>
                    <li>
                        <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/novidades">Novidades</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/sobre">Sobre</StyledLink>
                    </li>
                </Ul>
            </nav>
        </HeaderContainer>
    )
}