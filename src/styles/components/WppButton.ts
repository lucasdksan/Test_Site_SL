import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../colors/theme';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const Container = styled(motion.div)`
    position: fixed;
    z-index: 10;
    bottom: 40px;
    left: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    background-color: ${theme.colors.backgroundWhatsapp};
    transition: 0.5s linear;
    &:hover{
        cursor: pointer;
        background-color: ${theme.colors.main_whatsapp_dark};
        transition: 0.5s linear;
    }
`;
export const Link = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
export const Img = styled(AiOutlineWhatsApp)`
    width: 45px;
    height: 45px;
    color: ${theme.colors.secondary};
`;