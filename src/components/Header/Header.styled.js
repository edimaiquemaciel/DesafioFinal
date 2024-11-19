import styled from "styled-components"
import { FlexMixin } from "../../globalStyle";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
${FlexMixin("row", "space-between", "center")}
width: 100%;
padding: 24px 120px 0 120px;

img{
    width: 6rem;
}
`

export const Ul = styled.ul`
${FlexMixin("row", "space-between", "center")}
list-style: none;
width: 30vw;
`


export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 1.25rem;
font-weight: 500;
color: #1E3932;
transition: 0.5ms;
&:hover{
    color: #0F744B;
}
`