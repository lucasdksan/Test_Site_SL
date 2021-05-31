import React from 'react';
import { Container, Txt, Image } from '../styles/components/Card';

interface Props {
    image: string;
    text:{
        txt1: string,
        txt2: string,
        txt3: string,
    }
}

const Card: React.FC<Props> = ({image, text})=>{
    return (
        <Container>
            <Image 
                src={image}
                whileHover={{
                    scale: 0.8,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200
                }}
            />
            <Txt>{text.txt1}</Txt>
            <Txt>{text.txt2}</Txt>
            <Txt>{text.txt3}</Txt>
        </Container>
    );
}

export default Card;