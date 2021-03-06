import Header from '../components/Header';
import UpBotton from '../components/UpButton';
import WppButton from '../components/WppButton';
import Footer from '../components/Footer';
import Card from '../components/Card';

import Data from '../data/CardInfo';
import DataPath from '../data/PathImages';
import Imgs from '../data/PathProject';

import Img from '../assets/LogoOff.jpeg';
import Animation from '../assets/icons/Business.json';

import Lottie from 'react-lottie';
import { useWindowScroll } from 'react-use';
import { useState, useEffect } from 'react';

import {    Container, 
            Content, 
            FirstBlock, 
            FirstBlockImg,
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
            AreaImage,
            FifthBlock,
            TitleFifthBlock,
            ContentFifthBlock,
            ImageFifth,
            ImageContent } from '../styles/pages/Home';

const Home = ()=>{
    function SecondBlockAnimate(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: Animation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
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
        if(pageYOffset < 80){
            return(
                <SecondBlock
                    initial={{
                        opacity: 0,
                    }}
                />
            );
        }
        else {
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
                            Surge a reformula????o do nome, assumindo a marca do nosso sobrenome no mercado. Permanecendo o mesmo dinamismo, efici??ncia e as melhores solu????es. Atuando desde 2017 em constru????o pesada, a Silva & Lima oferece servi??os em diversas ??reas como: Elabora????o de projetos arquitet??nicos, Elabora????o projetos de reforma/amplia????o. Elabora????o de projetos el??tricos, hidr??ulicos e estruturais. Elo fundamental para a consolida????o de sua atua????o na presta????o de servi??os. A Silva & Lima possui o compromisso de viabilizar condi????es para atender os nossos clientes e parceiros, assegurando a qualidade contratada e o cronograma estipulado. Garantimos esse compromisso priorizando a disponibiliza????o de equipamentos novos, modernos e empregando m??o-de-obra qualificada para atendimento de cada necessidade.
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
                </FirstBlock>
                {
                    SecondBlockAnimate()
                }
                <ThirdBlock
                    id='services'
                >
                    <TitleThirdBlock>PRINCIPAIS ??REAS DE ATUA????O</TitleThirdBlock>
                    <AreaDescriptionThirdBlock>
                        {
                            Data.map(itens => {
                                return(
                                    <Card
                                        image={itens.image}
                                        text={itens.text}
                                        key={itens.key}
                                    />
                                );
                            })
                        }
                    </AreaDescriptionThirdBlock>
                    <Whatsapp>
                        <Button href="https://wa.me/5584933463760?text=Ol??, quero solicitar um or??amento!" target="_blank">
                            SOLICITE SEU OR??AMENTO
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
                                        src={itens.image}
                                        key={itens.key}
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
                <FifthBlock>
                    <TitleFifthBlock>SEU PROJETO GANHA VIDA</TitleFifthBlock>
                    <ContentFifthBlock>
                        {
                            Imgs.map(itens => {
                                return(
                                    <ImageContent>
                                        <ImageFifth
                                            src={itens}
                                            key={itens}
                                        />
                                    </ImageContent>
                                );
                            })
                        }
                    </ContentFifthBlock>
                </FifthBlock>
            </Content>
            <WppButton/>
            <UpBotton/>
            <Footer/>
        </Container>
    );
}

export default Home;