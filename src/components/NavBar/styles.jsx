import styled from 'styled-components';

export const NavBarStyle = styled.div `
    width: 100%;
    height: 50px;
    background: #444444;
    display: flex;
    position: fixed;
    border-bottom: 1px solid white;
    z-index: 99;
`;

export const NavBarDiv = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 20px;
`;

export const NavBarInput = styled.input `
    width: 200px;
    height: 25px;
    border-radius: 15px;
    border: none;
    padding: 0px 10px 0px 25px;
    &:focus {
        outline: none;
    }
`;

export const IconDiv = styled.div `
    position: relative;
    top: 5px;
    left: 20px;
    z-index: 99;
`;

export const Div = styled.div `
    display: flex;
    flex-direction: row;
`;

export const LinkText = styled.p `
    color: white;
    margin: 0px 12.5px 0px 12.5px;
    font-weight: bold;
    position: relative;
    right: 65%;
    cursor: pointer;
    &:hover {
        color: #8A8A8A;
    }
`;