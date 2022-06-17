import styled from "styled-components";

export const BodyStyle = styled.div `
    width: 100%;
`;

export const Div = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const ImgDiv = styled.div `
    width: 50vw;
    height: 600px;
    background-image: url(${props => props.img});
    background-size: cover;
`;

export const TextDiv = styled.div `
    width: 50vw;
    heigth: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Text = styled.p `
    text-align: justify;
    padding: 0px 50px;
`;

export const Title = styled.h1 `
    color: black;
    font-size: 36px;
    padding: 0px 50px;
`;