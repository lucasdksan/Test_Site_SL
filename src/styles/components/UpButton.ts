import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';
import theme from '../colors/theme';

export const Container = styled.div`
    z-index: 4;
    flex-direction: row;
    background: ${theme.colors.upButton};
    font-size: 20px;
    cursor: pointer;
    position: fixed;
    bottom: 40px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes scrollTop{
        from{
            transform: translateY(2px);
        }
        to{
            transform: translateY(-1px);
        }
    }
`;
export const Botton = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ArrowIcon = styled(MdKeyboardArrowUp)`
    font-size: 40px;
    color: ${theme.colors.secondary};
    animation: scrollTop 0.5s alternate ease infinite;
`;

