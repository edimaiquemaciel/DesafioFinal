import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;

}

`

export const SectionMixin = (direction = 'row-reverse', colorBg= '#1E3932', padding='70px' ) => css`
display: flex;
flex-direction: ${direction};
justify-content: space-evenly;
align-items: center;
padding-bottom: ${padding};
background-color: ${colorBg};
transition: background-color 0.8s ease;
`

export const FlexMixin = (direction, justify, align) => css`
display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
`

export const TextContent = styled.div`
width: 39.625rem;
height: 22.0625rem;
${FlexMixin("column", "space-between", "flex-start")}
color: #1E3932;
`

export const H2 = styled.h2`
font-size: 4rem;
font-weight: 400;   
`
export const H3 = styled.h3`
font-family: "Inter", sans-serif;
font-size: 1.5rem;  
`
export const Paragrafo = styled.p`
font-size: 1.5rem;
font-weight: 400;
`




