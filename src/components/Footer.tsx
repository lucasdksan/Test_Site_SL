import React from 'react';
import {    Container, 
            ImgLogo,
            AreaIcons,
            EmailIcon,
            InstagramIcon,
            Line,
            WhatsappIcon,
            Links,
            Copyright,
            TargerEnd,
            Text,
            Content,
            InfoContent,
            InfoText } from '../styles/components/Footer';
import ImgSL from '../assets/LogoOff.jpeg';

const Footer = ()=>{
    return(
        <Container>
            <Content>
                <ImgLogo src={ImgSL}/>
                <InfoContent>
                    <InfoText>
                        Bruno Lima | Arquitetura & Urbanismo
                    </InfoText>
                    <InfoText>
                        CREA/RN 56984
                    </InfoText>
                </InfoContent>
            </Content>
            <Line/>
            <AreaIcons>
                <Links href="mailto: falecom@sl.arq.br" target="_blank"><EmailIcon/></Links>
                <Links href="https://www.instagram.com/slparqt/" target="_blank"><InstagramIcon/></Links>
                <Links  href="https://wa.me/5584933463760?text=Olá, quero solicitar um orçamento!" target="_blank"><WhatsappIcon/></Links>
            </AreaIcons>
            <TargerEnd>
                <Copyright/>
                <Text>2021 Silva & Lima. Desenvolvido por Lucas da Silva.</Text>
                <Text className="MobileTarget">2020 Silva & Lima.</Text>
            </TargerEnd>
        </Container>
    );
}
export default Footer;