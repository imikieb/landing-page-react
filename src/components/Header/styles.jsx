import styled from 'styled-components';

export const HeaderStyle = styled.div `
    background-image: linear-gradient(#444444, #D5D5D5);
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TitleDiv = styled.div `
    position: relative;
    top: 25px;
`;

export const Title = styled.h1 `
    color: black;
    font-size: 36px
`;

export const SubTitle = styled.h1 `
    color: #3A3A3A;
    font-size: 26px;
`;

export const Autor = styled.p `
    position: absolute;
    right: 0;
    color: #3A3A3A;
    font-weight: bold;
    padding: 0px 10px 10px 0px;
    align-self: flex-end;
`;