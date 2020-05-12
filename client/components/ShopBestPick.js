import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import shopIcon from '../assets/shopIcon.png';

const ShopBestPick = () => {
  return (
    <View>
      <Image source={ shopIcon } style={{ position: 'absolute', marginLeft: 15, height: 25, width: 25, marginTop: 4 }} />
      <Text style={{ marginLeft: 45, fontSize: 24, fontWeight: 'bold' }}>Shop</Text>
      <Text style={{ marginLeft: 15, fontSize: 24, marginBottom: 15 }}>Best Picks in Town</Text>
      <Text style={{ fontSize: 18, right: 15, position: 'absolute', marginTop: 38, color: 'green' }}>See All</Text>

      <ScrollView horizontal={ true } style={{ marginLeft: 10, padding: 10, marginBottom: 15 }} showsHorizontalScrollIndicator={ false }>
        <Card style={{ width: 150, marginRight: 20 }}>
          <Card.Cover style={{ height: 200 }} source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Shop Name</Title>
            <Paragraph>Shop Address</Paragraph>
            <Paragraph style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18, color: 'green' }}>See details</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ width: 150, marginRight: 20 }}>
          <Card.Cover style={{ height: 200 }} source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Shop Name</Title>
            <Paragraph>Shop Address</Paragraph>
            <Paragraph style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18, color: 'green' }}>See details</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ width: 150, marginRight: 20 }}>
          <Card.Cover style={{ height: 200 }} source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Shop Name</Title>
            <Paragraph>Shop Address</Paragraph>
            <Paragraph style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18, color: 'green' }}>See details</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ width: 150, marginRight: 20 }}>
          <Card.Cover style={{ height: 200 }} source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Shop Name</Title>
            <Paragraph>Shop Address</Paragraph>
            <Paragraph style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18, color: 'green' }}>See details</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default ShopBestPick;