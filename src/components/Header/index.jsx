import { HeaderStyle, TitleDiv, Title, SubTitle, Autor } from './styles';

export function Header() {
    return (
        <HeaderStyle>
            <TitleDiv>
                <Title>ORIENTE</Title>
                <SubTitle>Um emocionante passeio pelos principais vulcões no Japão</SubTitle>
            </TitleDiv>
            <Autor>By Ana Paula Ramos</Autor>
        </HeaderStyle>
    );
}