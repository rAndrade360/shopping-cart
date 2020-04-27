import React from 'react';

import { Container, Avatar, Name, BodyContainer, ActionButton, TextActionButton } from './styles';

export default function CardItem({data}) {
  return (
    <Container>
        <Avatar source={{uri: `https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}} />
        <BodyContainer>
            <Name>Audi</Name>
            <ActionButton>
                <TextActionButton>Adicionar ao carrinho</TextActionButton>
            </ActionButton>
        </BodyContainer>
       
    </Container>
  );
}
