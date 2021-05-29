import React from 'react';
import { Container,
         Menu,
         ButtonMenu
    } from '../styles/components/Header';

const Header = ()=>{
    return(
        <Container>
            <Menu>
                <ButtonMenu href='/'>INÍCIO</ButtonMenu>
                <ButtonMenu href="#sobre">SOBRE</ButtonMenu>
                <ButtonMenu>SERVIÇOS</ButtonMenu>
                <ButtonMenu>CLIENTES</ButtonMenu>
            </Menu>
        </Container>
    );
}

export default  Header;