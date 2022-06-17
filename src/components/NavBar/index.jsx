import { NavBarStyle, NavBarInput, Div, IconDiv, NavBarDiv, LinkText } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

export function NavBar() {
    return (
        <NavBarStyle>
            <NavBarDiv>
                <FontAwesomeIcon icon={faBars} size='lg' color='white' cursor='pointer'/>
                <Div>
                    <LinkText>Home</LinkText>
                    <LinkText>Países</LinkText>
                    <LinkText>Custo de vida</LinkText>
                    <LinkText>Intercâmbio</LinkText>
                    <LinkText>Saiba mais</LinkText>
                </Div>
                <Div>
                    <IconDiv>
                        <FontAwesomeIcon icon={faSearch} size='sm' color='black'/>
                    </IconDiv>
                    <NavBarInput/>
                </Div>
            </NavBarDiv>
        </NavBarStyle>
    );
}