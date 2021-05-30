import React from 'react';
import {    Container, 
            Content, 
            FirstBlock, 
            FirstBlockImg,
            FirstBlocText,
            SecondBlock,
            TextAreaSecondBlock,
            TitleSecondBlock,
            AreaDescriptionSecondBlock,
            DescriptionSecondBlock,
            ThirdBlock, 
            TitleThirdBlock,
            AreaDescriptionThirdBlock,
            Button,
            Whatsapp, } from '../styles/pages/Home';
import Header from '../components/Header';
import Img from '../assets/LogoOff.jpeg';
import UpBotton from '../components/UpButton';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Data from '../data/CardInfo';

const Home = ()=>{
    return(
        <Container>
            <Header/>
            <Content>
                <FirstBlock>
                    <FirstBlockImg
                        src={Img}
                        initial={{
                            x: -300,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: [0, 0.2, 0.5, 0.8, 1],
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 40,
                        }}
                        whileHover={{
                            scale: 1.08,
                        }}
                    />
                    <FirstBlocText
                        initial={{
                            y: 100,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: [0, 0.2, 0.5, 0.8, 1],
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 40,
                        }}
                    >
                        Participações em Projetos de Arquitetura, Urbanismo e Construções Civis
                    </FirstBlocText>
                </FirstBlock>
                <SecondBlock>
                    <TextAreaSecondBlock id='about'>
                        <TitleSecondBlock>SOBRE</TitleSecondBlock>
                    </TextAreaSecondBlock>
                    <AreaDescriptionSecondBlock>
                        <DescriptionSecondBlock>
                            Rutrum tempor viverra condimentum est senectus ultricies ac nam rhoncus euismod hac, sapien cras ornare proin netus quisque adipiscing lacinia habitasse penatibus. Per pulvinar vitae curae luctus donec amet class habitant sed, nullam conubia nisi himenaeos turpis elit penatibus lacinia aenean nulla, blandit phasellus neque quisque varius commodo odio ipsum. Hac quam malesuada donec facilisi natoque eros vel cursus lacinia, pulvinar adipiscing ac tortor ut suscipit phasellus elementum ultricies nostra, potenti convallis vestibulum ullamcorper nibh aliquam nisl feugiat. Dignissim vestibulum per mus volutpat nibh, pulvinar sed adipiscing sagittis, tristique pellentesque curabitur praesent. Nascetur placerat velit congue parturient fusce cubilia, condimentum scelerisque leo venenatis morbi.
                        </DescriptionSecondBlock>
                    </AreaDescriptionSecondBlock>
                </SecondBlock>
                <ThirdBlock
                    id='services'
                >
                    <TitleThirdBlock>PRINCIPAIS ÁREAS DE ATUAÇÃO</TitleThirdBlock>
                    <AreaDescriptionThirdBlock>
                        {
                            Data.map(itens => {
                                return(
                                    <Card
                                        image={itens.image}
                                        text={itens.text}
                                    />
                                );
                            })
                        }
                    </AreaDescriptionThirdBlock>
                    <Whatsapp>
                        <Button href="https://web.whatsapp.com/send?phone=5584933463760" target="_blank">
                            SOLICITE SEU ORÇAMENTO
                        </Button>
                    </Whatsapp>
                </ThirdBlock>
            </Content>
            <UpBotton/>
            <Footer/>
        </Container>
    );
}

export default Home;