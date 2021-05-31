import React from 'react';
import { Container,
         Menu,
         ButtonMenu
    } from '../styles/components/Header';

const Header = ()=>{
    function Scroll(value:number){
        window.scrollTo({top: value, behavior: 'smooth'});
    }
    return(
        <Container>
            <Menu>
                <ButtonMenu href='/'>INÍCIO</ButtonMenu>
                <ButtonMenu onClick={()=>Scroll(665)}>SOBRE</ButtonMenu>
                <ButtonMenu onClick={()=>Scroll(1325)}>SERVIÇOS</ButtonMenu>
                <ButtonMenu onClick={()=>Scroll(1990)}>CLIENTES</ButtonMenu>
            </Menu>
        </Container>
    );
}

export default  Header;