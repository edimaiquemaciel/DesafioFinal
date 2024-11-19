import styled, { css } from "styled-components";
import { FlexMixin, SectionMixin } from "../../globalStyle";

const TextoMixin = css`
font-size: 3.625rem;
font-weight: 400;
color: #333333;
`

export const SectionHome = styled.section`
${SectionMixin("column", "transparent", "0")}
justify-content: center;
align-items: flex-start;
margin-left: 130px;
`

export const CopoImg = styled.img`
width: 28.125rem;
position: absolute;
bottom: 90px;
right: 90px;
`


export const ContainerCopoBtn = styled.div`
display: flex;
position: absolute;
bottom: 0;
left: 460px;

`

export const MiniCopoBtn = styled.img`
margin: 0 .625rem;
cursor: pointer;
transition: 0.8s;

&:hover {
    transform: translateY(-10px) rotate(12deg);
}
`


export const TextHome = styled.div`
width: 39.375rem;
${FlexMixin("column", "space-between", "flex-start")}
margin-top: 80px;

span{
    color: #037143;
    font-size: 4.375rem;
    font-weight: 800;
}
`

export const H2 = styled.h2`
${TextoMixin}
`
export const H3 = styled.h3`
font-family: "Inter", sans-serif;
${TextoMixin}
`

export const Paragrafo = styled.p`
color: #333333;
font-size: 1.0625rem;
font-weight: 500;
font-family: "Poppins", sans-serif;
text-align: left;
`

export const Circulo = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.$backgroundColor};
position: absolute;
top: 0;
left: 0;
clip-path: circle(48% at 98% 100%);
z-index:-1;
transition: background-color 0.8s ease;
`

export const RedeSocial = styled.div`
${FlexMixin("column", "space-between", "center")};
position: absolute;
gap: 20px;
bottom: 290px;
right: 35px;

img{
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.13);
    }
}

`