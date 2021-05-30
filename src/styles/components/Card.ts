import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 400px;
    padding: 10px 20px;
    margin-right: 15px;
`;
export const Image = styled(motion.img)`
    width: 160px;
    height: 150px;
    margin-bottom: 20px;
`;
export const Txt = styled.h1`
    color: #fff;
    font-size: 17px;
    font-family: Consolas;
    margin-bottom: 8px;
    text-align: center;
`;