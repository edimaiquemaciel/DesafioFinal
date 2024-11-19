import styled from "styled-components";

const Button = styled.button`
padding: 12px 40px;
border-radius: 30px;
background-color: #037143;
margin-top: 30px;
border: none;
cursor: pointer;
transition: 0.5s;
&:hover{
    background-color: #054129;
}
a{
    text-decoration: none;
    color: #FFFFFF;
    font-family: "Inter", sans-serif;
    font-weight: bolder;
    font-size: 1rem;
}
`

export default Button;