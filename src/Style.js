import { style } from "framer-motion/client";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

`

const SectionMixin = (direction = 'row-reverse', colorBg= '#1E3932', padding='70px' ) => css`
display: flex;
flex-direction: ${direction};
justify-content: space-evenly;
align-items: center;
padding-bottom: ${padding};
min-height: 85vh;
background-color: ${colorBg};
`

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 34px 145px 0 145px;
`;

export const NavBar = styled.nav`

`
export const StyledList = styled.ul`
display: flex;
justify-content: space-between;
list-style: none;
width: 30vw;
`

export const StyledListItem = styled.li`
`

export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 24px;
color: #1E3932;
`

export const SectionSobre = styled.section`
${SectionMixin('row', '#FFFFFF', '80px')}
`

export const SectionNovidades = styled.section`
${SectionMixin()}
`
export const SectionHome = styled.section`
${SectionMixin("column", "transparent", "0")}
justify-content: center;
align-items: flex-start;
margin-left: 145px;
min-height: 100vh;

span{
    color: #037143;
    font-size: 96px;
    font-weight: bold;
}
`

export const CopoImg = styled.img`
position: absolute;
bottom: -120px;
right: 15px;
`

export const ContainerCopoBtn = styled.div`
width: 35vw;
display: flex;
position: absolute;
bottom: -200px;
left: 460px;

img{
    margin: 0 .625rem;
    cursor: pointer;
    transition: 0.8s;

    &:hover {
        transform: translateY(-25px);
    }
}
`

export const TextSobre = styled.div`
width: 634px;
height: 353px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;

h2{
    font-size: 64px;
    font-weight: 400;
    color: #1E3932;
}

h3{
    font-family: "Inter", sans-serif;
    font-size: 24px;
    color: #1E3932;
}

p{
    color: #1E3932;
    font-size: 24px;
    font-weight: 400;
}
`

export const TextNovidades = styled.div`
width: 634px;
height: 353px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;

h2{
    font-size: 64px;
    font-weight: 400;
    color: #FFFFFF;
}

h3{
    font-family: "Inter", sans-serif;
    font-size: 24px;
    color: #FFFFFF;
}

p{
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
}
`
export const TextHome = styled.div`
width: 750px;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap: 20px;

h2{
    font-size: 64px;
    font-weight: 400;
    color: #000000;
}

h3{
    font-family: "Inter", sans-serif;
    font-size: 64px;
    color: #000000;
    opacity: 0.7;
    font-weight: 400;
}

p{
    color: #000000;
    font-size: 24px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
}
`

export const Button = styled.button`
padding: 12px 78px;
border-radius: 30px;
font-size: 24px;
background-color: #037143;

border: none;
a{
    text-decoration: none;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    font-weight: bold;
}
`

export const Circulo = styled.div`
width: 100%;
height: 100%;
background-color: #017143;
position: absolute;
top: 200px;
left: 0;
clip-path: circle(43% at 94% 100%);
z-index:-1;
`