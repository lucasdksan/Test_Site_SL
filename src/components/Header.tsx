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
                <ButtonMenu onClick={()=>Scroll(732)}>SOBRE</ButtonMenu>
                <ButtonMenu onClick={()=>Scroll(1385)}>SERVIÇOS</ButtonMenu>
                <ButtonMenu onClick={()=>Scroll(2040)}>CLIENTES</ButtonMenu>
                <ButtonMenu onClick={()=>Scroll(2760)}>GALERIA</ButtonMenu>
            </Menu>
        </Container>
    );
}

export default  Header;