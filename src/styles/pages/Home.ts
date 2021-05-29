import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    top: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;
export const FirstBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 89vh;
    flex-direction: column;
    background-color: #353535;
    padding: 40px 30px;
`;
export const FirstBlockImg = styled(motion.img)`
    width: 240px;
    height: 240px;
`;
export const FirstBlocText = styled(motion.h1)`
    font-family: Consolas;
    color: #fff;
    font-size: 25px;
    margin-top: 30px;
    text-align: center;
`;
export const SecondBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 10px;
    width: 100%;
    height: 500px;
    background-color: #fff;
`;
export const TextAreaSecondBlock = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px 150px;
`;
export const TitleSecondBlock = styled.h1`
    font-size: 35px;
    font-family: Consolas;
    color: #353535;
`;
export const AreaDescriptionSecondBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 250px;
`;
export const DescriptionSecondBlock = styled.div`
    text-align: justify;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 30px;
`;
export const ThirdBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 10px;
    width: 100%;
    height: 650px;
    background-color: #000;
`;
export const TitleThirdBlock = styled.h1`
    font-size: 35px;
    font-family: Consolas;
    color: #fff;
`;
export const AreaDescriptionThirdBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: row;
    width: 100%;
`;