import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../colors/theme';
import backgroundImg from '../../assets/background/Back2.jpg';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
export const Content = styled.main`
    display: flex;
    top: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.secondary};
`;
export const FirstBlock = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: bottom;
    background-position: center;
    background-image: url(${backgroundImg});
    background-color: ${theme.colors.colorIcon};
    background-repeat: no-repeat;
    background-size: cover;
    padding: 40px 30px;
`;
export const FirstBlockImg = styled(motion.img)`
    width: 250px;
    height: 250px;
    object-fit: contain;
    @media(max-width: 768px){
        width: 200px;
        height: 200px;
    }
`;
export const FirstBlocText = styled(motion.h1)`
    font-family: ${theme.fonts.font1};
    color: ${theme.colors.secondary};
    font-size: 28px;
    margin-top: 30px;
    text-align: center;
    @media(max-width: 625px){
        font-size: 20px;
    }
`;
export const SecondBlock = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 5px;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.secondary};
    @media(max-width: 550px){
        padding: 20px 5px;
        margin-bottom: 50px;
    }
`;
export const TextAreaSecondBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px 150px;
    @media(max-width: 1200px){
        padding: 10px 100px;
    }
    @media(max-width: 1080px){
        padding: 10px 90px;
        margin-bottom: 10px;
    }
    @media(max-width: 950px){
        padding: 10px 20px;
        margin-bottom: 5px;
    }
    @media(max-width: 550px){
        padding: 10px 15px;
        margin-bottom: 0px;
    }
`;
export const TitleSecondBlock = styled.h1`
    font-size: 32px;
    font-family: ${theme.fonts.font2}, sans-serif;
    color: ${theme.colors.colorText1};
`;
export const AreaDescriptionSecondBlock = styled.nav`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 10px 175px;
    @media(max-width: 1200px){
        padding: 10px 145px;
    }
    @media(max-width: 1080px){
        padding: 10px 110px;
    }
    @media(max-width: 950px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 10px;
        padding: 10px 25px;
    }
    @media(max-width: 550px){
        padding: 10px 20px;
    }
`;
export const DescriptionSecondBlock = styled.p`
    text-align: justify;
    font-size: 20px;
    font-family: ${theme.fonts.font4}, ${theme.fonts.font5}, sans-serif;
    line-height: 30px;
    flex: 1;
    margin-right: 30px;
    z-index: 2;
    @media(max-width: 1200px){
        font-size: 16px;
        line-height: 28px;
    }
    @media(max-width: 950px){
        font-size: 14px;
        line-height: 26px;
        margin-right: 0;
    }
    @media(max-width: 550px){
        font-size: 13px;
        line-height: 24px;
        margin-bottom: 20px;
    }
`;
export const ThirdBlock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 10px;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primay};
    @media(max-width: 1090px){
        justify-content: space-evenly;
        padding: 25px 5px; 
    }
`;
export const TitleThirdBlock = styled.h1`
    font-size: 32px;
    font-family: ${theme.fonts.font2}, sans-serif;
    color: ${theme.colors.secondary};
    text-align: center;
`;
export const AreaDescriptionThirdBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    margin-bottom: 30px;
    @media(max-width: 640px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        overflow-x: auto;
    }
`;
export const Whatsapp = styled.span`
    width: 260px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Button = styled.a`
    text-decoration: none;
    width: 250px;
    height: 40px;
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transition-property: transform;
    transform: scale(1.2);
    background-color: ${theme.colors.colorText1};
    color: ${theme.colors.secondary};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    flex: 1;
    &:hover{
        cursor: pointer;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        transition-property: transform;
        transform: scale(1);
        background-color: ${theme.colors.backgroundWhatsapp};
        color: ${theme.colors.secondary};
    }
    @media(max-width: 800px){
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        transform: scale(1);
        background-color: ${theme.colors.colorText1};
        color: ${theme.colors.secondary};
        &:hover{
            cursor: pointer;
            -moz-transition: all 0.5s;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
            transition-property: transform;
            transform: scale(0.9);
            background-color: ${theme.colors.backgroundWhatsapp};
            color: ${theme.colors.secondary};
        }
    }
`;
export const FourthBlock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    background-color: ${theme.colors.colorText1};
    border-bottom: solid 1px ${theme.colors.secondary};
`;
export const TitleFourthBlock = styled.h2`
    font-size: 32px;
    margin-bottom: 80px;
    font-family: ${theme.fonts.font2}, sans-serif;
    text-align: center;
    color: ${theme.colors.secondary};
    @media(max-width: 1100px){
        font-size: 25px;
        margin-bottom: 40px;
    }
    @media(max-width: 768px){
        font-size: 20px;
        margin-bottom: 35px;
    }
`;
export const AreaImage = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 70px;
    padding: 0 10px;
    @media(max-width: 1100px){
        display: grid;
        grid-gap: 60px;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(max-width: 768px){
        display: grid;
        grid-gap: 40px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }
`;
export const ImagesFourthBlock = styled(motion.img)`
    width: 180px;
    height: 180px;
    fill: ${theme.colors.colorIcon};
    @media(max-width: 768px){
        width: 100px;
        height: 100px;
    }
`;
export const FifthBlock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 35px 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.secondary};
`;
export const TitleFifthBlock = styled.h2`
    font-size: 32px;
    margin-bottom: 40px;    
    font-family: ${theme.fonts.font2} , sans-serif;
    text-align: center;
    color: ${theme.colors.primay};
`;
export const ContentFifthBlock = styled.div`
    display: grid;
    grid-gap: 60px;
    display: grid;
    grid-gap: 80px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 40px;
    padding: 0 10px;
    @media(max-width: 1100px){
        display: grid;
        grid-gap: 60px;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(max-width: 768px){
        display: grid;
        grid-gap: 40px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }
`;
export const ImageContent = styled.div`
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 16px 10px #0000004b;
    @media(max-width: 768px){
        width: 125px;
        height: 125px;
    }
`;
export const ImageFifth = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s linear;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        box-shadow: 0 0 20px 5px ${theme.colors.primay}; 
    }
`;