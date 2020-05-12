import React from 'react';
import { Card, Title } from 'react-native-paper';
import { View } from 'react-native';

const YourPromo = () => {
  return(
    <View style={{ alignItems: 'center' }}>
      <Card style={{ width: 330 }}>
        <Card.Cover style={{ height: 100 }} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>Your Promo</Title>
        </Card.Content>
      </Card>
    </View>
  );
};

export default YourPromo;