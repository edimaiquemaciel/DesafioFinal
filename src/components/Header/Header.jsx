import {Link} from 'react-router-dom';
import logo from "../../assets/logo.png";
import { HeaderContainer, NavBar, StyledList, StyledListItem, StyledLink } from '../../Style';
export default function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logomarca StarBucks" />
            <NavBar>
                <StyledList>
                    <StyledListItem>
                        <StyledLink to="/">Home</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/novidades">Novidades</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/sobre">Sobre</StyledLink>
                    </StyledListItem>
                </StyledList>
            </NavBar>
        </HeaderContainer>
    )
}