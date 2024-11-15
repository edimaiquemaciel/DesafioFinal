import logo from "../../assets/logo.png";
import { HeaderContainer, StyledLink } from '../../Style';
export default function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logomarca StarBucks" />
            <nav>
                <ul>
                    <li>
                        <StyledLink to="/">Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/novidades">Novidades</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/sobre">Sobre</StyledLink>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}