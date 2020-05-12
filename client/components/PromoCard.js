import React from 'react';
import { Card, Title } from 'react-native-paper';
import placeholder from '../assets/placeholder.jpg';

const PromoCard = () => {
  return (
    <Card style={{ width: 330, marginBottom: 15, marginLeft: 15 }}>
      <Card.Cover style={{ height: 150 }} source={ placeholder } />
      <Card.Content>
        <Title>Promo Card</Title>
      </Card.Content>
    </Card>
  );
};

export default PromoCard;