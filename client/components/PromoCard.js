import React from 'react';
import { Card, Title } from 'react-native-paper';

const PromoCard = () => {
  return (
    <Card style={{ width: 330, marginBottom: 15, marginLeft: 15 }}>
      <Card.Cover style={{ height: 150 }} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title>Promo Card</Title>
      </Card.Content>
    </Card>
  );
};

export default PromoCard;