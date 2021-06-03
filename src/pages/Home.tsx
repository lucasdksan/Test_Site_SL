import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Img from '../assets/LogoOff.jpeg';
import UpBotton from '../components/UpButton';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Data from '../data/CardInfo';
import DataPath from '../data/PathImages';
import Animation from '../assets/icons/Business.json';
import Lottie from 'react-lottie';
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
            Whatsapp,
            FourthBlock,
            TitleFourthBlock,
            ImagesFourthBlock,
            AreaImage, } from '../styles/pages/Home';
import { useWindowScroll } from 'react-use';

const Home = ()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    function SecondBlockAnimate(){
        const { y: pageYOffset } = useWindowScroll();
        let width = window.innerWidth;
        const [ scaleX, setScaleX ] = useState<number>(350);
        const [ scaleY, setScaleY ] = useState<number>(300);
        useEffect(()=>{
            if(window.innerWidth <= 1200 && window.innerWidth >= 1081){
                setScaleX(290);
                setScaleY(250);
            }
            else if(window.innerWidth <= 1080 && window.innerWidth > 950){
                setScaleX(255);
                setScaleY(235);
            }
            else if(window.innerWidth <= 950 && window.innerWidth > 830){
                setScaleX(360);
                setScaleY(320);
            }
            else if(window.innerWidth <= 830){
                setScaleX(280);
                setScaleY(220);
            }
        },[width]);
        if(pageYOffset >= 150){
            return(
                <SecondBlock
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: [0, 0.2, 0.5, 0.8, 1],
                    }}
                >
                    <TextAreaSecondBlock id='about'>
                        <TitleSecondBlock>SOBRE</TitleSecondBlock>
                    </TextAreaSecondBlock>
                    <AreaDescriptionSecondBlock>
                        <DescriptionSecondBlock>
                            Surge a reformulação do nome, assumindo a marca do nosso sobrenome no mercado. Permanecendo o mesmo dinamismo, eficiência e as melhores soluções. Atuando desde 2017 em construção pesada, a Silva & Lima oferece serviços em diversas áreas como: Elaboração de projetos arquitetônicos, Elaboração projetos de reforma/ampliação. Elaboração de projetos elétricos, hidráulicos e estruturais. Elo fundamental para a consolidação de sua atuação na prestação de serviços. A Silva & Lima possui o compromisso de viabilizar condições para atender os nossos clientes e parceiros, assegurando a qualidade contratada e o cronograma estipulado. Garantimos esse compromisso priorizando a disponibilização de equipamentos novos, modernos e empregando mão-de-obra qualificada para atendimento de cada necessidade.
                        </DescriptionSecondBlock>
                        <Lottie
                            options={defaultOptions}
                            height={scaleY}
                            width={scaleX}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0px 0px 10px 10px',
                            }}
                        />
                    </AreaDescriptionSecondBlock>
                </SecondBlock>
            );
        }
        else {
            return(
                <SecondBlock>

                </SecondBlock>
            );
        }
    }
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
                {
                    SecondBlockAnimate()
                }
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
                                        key={itens.image}
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
                <FourthBlock>
                    <TitleFourthBlock>EMPRESAS QUE CONFIAM NO NOSSO TRABALHO</TitleFourthBlock>
                    <AreaImage>
                        {
                            DataPath.map(itens =>{
                                return (
                                    <ImagesFourthBlock
                                        src={itens}
                                        key={itens}
                                        whileHover={{
                                            scale: 1.1,
                                            cursor: 'pointer',
                                        }}
                                    />
                                );
                            })
                        }
                    </AreaImage>
                </FourthBlock>
            </Content>
            <UpBotton/>
            <Footer/>
        </Container>
    );
}

export default Home;