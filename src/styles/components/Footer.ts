import styled, { css } from 'styled-components';
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai';

const linkCss = css`
    color: #808080;
    font-size: 50px;
    margin: 0 20px 0 20px;
    transition: .5s;
    transition-property: color;
    &:hover{
        color: #05a0e7;
        cursor: pointer;
    }
`;

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    width: 100%;
    height: 280px;
    padding: 30px 10px;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;
export const ImgLogo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
`;
export const AreaIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 15px;
`;
export const Line = styled.span`
    width: 75%;
    border-bottom: 2px solid #fff;
    margin-bottom: 15px;
`;
export const Links = styled.a`
    text-decoration: none;
`;
export const TargerEnd = styled.div`
    left: 0px;
    top: 100%;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin-bottom: auto;
    height: 30px;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > svg + p {
        margin-left: 10px;
    }
    >.MobileTarget{
        display: none;
    }
    @media(max-width: 380px){
        >.MobileTarget{
            display: flex;
        }
    }
`;
export const Copyright = styled(AiOutlineCopyright)``;
export const Text = styled.p`
    font-family: 'Times New Roman', Times, serif;
    @media(max-width: 380px){
        display: none;
    }
`;
export const WhatsappIcon = styled(AiOutlineWhatsApp)`${linkCss}`;
export const EmailIcon = styled(AiOutlineMail)`${linkCss}`;
export const InstagramIcon = styled(AiOutlineInstagram)`${linkCss}`;