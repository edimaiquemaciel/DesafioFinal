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
background-color: ${colorBg};
transition: background-color 0.8s ease;
`

const FlexMixin = (direction, justify, align) => css`
display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
`

export const HeaderContainer = styled.header`
${FlexMixin("row", "space-between", "center")}
width: 100%;
padding: 24px 120px 0 120px;

ul{
${FlexMixin("row", "space-between", "center")}
list-style: none;
width: 30vw;
}

img{
    width: 96px;
}
`


export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
font-weight: 500;
color: #1E3932;
transition: 0.5ms;
&:hover{
    color: #0F744B;
}
`


export const SectionSobre = styled.section`
${SectionMixin('row', '#FFFFFF', '0')}
min-height: 80vh;
`

export const SectionNovidades = styled.section`
${SectionMixin()}
min-height: 100vh;
`
export const SectionHome = styled.section`
${SectionMixin("column", "transparent", "0")}
justify-content: center;
align-items: flex-start;
margin-left: 130px;
`


export const ContainerCopoBtn = styled.div`
display: flex;
position: absolute;
bottom: 0;
left: 460px;

img{
    margin: 0 .625rem;
    cursor: pointer;
    transition: 0.8s;

    &:hover {
        transform: translateY(-10px) rotate(12deg);
    }
}
`
export const CopoImg = styled.img`
width: 450px;
position: absolute;
bottom: 90px;
right: 90px;
`



export const TextSobre = styled.div`
width: 634px;
height: 353px;
${FlexMixin("column", "space-between", "flex-start")}
color: #1E3932;

h2{
    font-size: 64px;
    font-weight: 400;    
}

h3{
    font-family: "Inter", sans-serif;
    font-size: 24px;
}

p{
    font-size: 24px;
    font-weight: 400;
}
`

export const TextNovidades = styled.div`
width: 634px;
height: 353px;
${FlexMixin("column", "space-between", "flex-start")}

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
width: 630px;
${FlexMixin("column", "space-between", "flex-start")}
margin-top: 80px;

h2{
    font-size: 58px;
    font-weight: 400;
    color: #333333;
}

h3{
    font-family: "Inter", sans-serif;
    font-size: 58px;
    color: #333333;
    font-weight: 400;
}

p{
    color: #333333;
    font-size: 17px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    text-align: left;
}

span{
    color: #037143;
    font-size: 70px;
    font-weight: 800;
}
`

export const Button = styled.button`
padding: 12px 40px;
border-radius: 30px;
background-color: #037143;
margin-top: 30px;
border: none;
cursor: pointer;
transition: 0.15s;
&:hover{
    background-color: #075534;
}
a{
    text-decoration: none;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    font-weight: bolder;
    font-size: 16px;
}
`

export const Circulo = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.backgroundColor};
position: absolute;
top: 0;
left: 0;
clip-path: circle(48% at 98% 100%);
z-index:-1;
transition: background-color 0.8s ease;
`