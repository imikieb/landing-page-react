import { FooterStyle, Div, Title, Text, VerticalLine, IconsDiv, MarginDiv, FooterText, FooterCopyRight, CopyRightDiv } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <FooterStyle>
            <Div width='750px' right='3%'>
                <Title>
                    SOBRE MIM
                </Title>
                <br />
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sunt totam est vitae fuga nisi rem labore recusandae. Illo assumenda maiores reprehenderit dolores est ipsam, sit qui alias facilis porro.
                </Text>
            </Div>
            <VerticalLine></VerticalLine>
            <IconsDiv>
                <MarginDiv>
                    <FontAwesomeIcon icon={faFacebook} size='2x' color='white'/>
                    <FooterText>Facebook</FooterText>
                </MarginDiv>
                <br />
                <MarginDiv>
                    <FontAwesomeIcon icon={faInstagram} size='2x' color='white'/>
                    <FooterText>Instagram</FooterText>
                </MarginDiv>
                <br />
                <MarginDiv>
                    <FontAwesomeIcon icon={faTwitter} size='2x' color='white'/>
                    <FooterText>Twitter</FooterText>
                </MarginDiv>
                <br />
                <MarginDiv>
                    <FontAwesomeIcon icon={faWhatsapp} size='2x' color='white'/>
                    <FooterText>WhatsApp</FooterText>
                </MarginDiv>
            </IconsDiv>
            <CopyRightDiv>
                <FooterCopyRight>
                    ©2022. All Rights Reserved.
                </FooterCopyRight>
            </CopyRightDiv>
        </FooterStyle>
    );
}