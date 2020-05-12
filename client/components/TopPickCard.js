import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const TopPickCard = () => {
  return (
    <Card style={{ width: 280, marginRight: 20 }}>
      <Card.Cover style={{ height: 120 }} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title>Lorem Ipsum</Title>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
      </Card.Content>
    </Card>
  )
};

export default TopPickCard;