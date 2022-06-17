import styled from "styled-components";

export const FooterStyle = styled.div `
    background: #444444;
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Div = styled.div `
    width: ${props => props.width};
    position: relative;
    right: ${props => props.right}
`;

export const Text = styled.p `
    color: white;
`;

export const Title = styled.h1 `
    color: black;
`;

export const VerticalLine = styled.div `
    border: 1px inset;
    height: 80%;
`;

export const IconsDiv = styled.div `

`;

export const MarginDiv = styled.div `
    display: flex;
    flex-direction: row;
    cursor: pointer;
    position: relative;
    left: 50%;
`;

export const FooterText = styled.p `
    position: relative;
    margin-top: 8%;
    left: 8%;
    color: white;
`;

export const CopyRightDiv = styled.div `
    position: absolute;
    align-self: flex-end;
    margin-bottom: 0.5%;
`;

export const FooterCopyRight = styled.p `
    color: white;
    font-size: 12px;
`;