import styled, { css } from 'styled-components';
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineInstagram, AiOutlineCopyright } from 'react-icons/ai';
import theme from '../colors/theme';

const linkCss = css`
    color: ${theme.colors.colorIcon};
    font-size: 50px;
    margin: 0 20px 0 20px;
    transition: .5s;
    transition-property: color;
    &:hover{
        color: ${theme.colors.colorIconHover};
        cursor: pointer;
    }
`;

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primay};
    width: 100%;
    height: 380px;
    padding: 30px 10px;
    bottom: 0px;
    right: 0px;
    left: 0px;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 640px;
    padding: 10px 30px;
    margin-bottom: 30px;
    flex: 1;
`;
export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 90%;
    border-left-width: 3px;
    border-left-color: ${theme.colors.secondary};
    border-left-style: solid;
    padding: 10px 10px;
`;
export const InfoText = styled.p`
    color: ${theme.colors.secondary};
    font-size: 21px;
    text-align: center;
    font-family: ${theme.fonts.font1};
    padding: 5px 0px;
`;
export const ImgLogo = styled.img`
    width: 120px;
    height: 120px;
    margin-right: 20px;
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
    border-bottom: 2px solid ${theme.colors.secondary};
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
    height: 30px;
    width: 100%;
    color: ${theme.colors.secondary};
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
    font-family: ${theme.fonts.font3}, Times, serif;
    @media(max-width: 400px){
        display: none;
    }
`;
export const WhatsappIcon = styled(AiOutlineWhatsApp)`${linkCss}`;
export const EmailIcon = styled(AiOutlineMail)`${linkCss}`;
export const InstagramIcon = styled(AiOutlineInstagram)`${linkCss}`;