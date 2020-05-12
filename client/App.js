import React from 'react';
import { Text, View, Image } from 'react-native';
import { Searchbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import walletIcon from './assets/wallet.png';
import rideIcon from './assets/ride-icon.png';
import carIcon from './assets/car-icon.png';
import foodIcon from './assets/foodIcon.png';
import shopIcon from './assets/shopIcon.png';

export default function App() {
  return (
    <View>
      <Searchbar
        placeholder="Search"
        value=''
        style={{ position: 'absolute', top: 40, width: 270, marginLeft: 15 }}
      />
      <Image source={ walletIcon } style={{ top: 38, right: 15, position: 'absolute' }} />
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Card style={{ width: 330 }}>
          <Card.Cover style={{ height: 100 }} source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Your Promo</Title>
          </Card.Content>
        </Card>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', flexWrap: 'wrap', padding: 20 }}>
        <View>
          <Image source={ rideIcon } style={{ marginRight: 15, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Ride</Text>
        </View>
        <View>
          <Image source={ carIcon } style={{ marginRight: 15, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 27 }}>Car</Text>
        </View>
        <View>
          <Image source={ foodIcon } style={{ marginRight: 15, marginLeft: 15, height: 50, width: 50 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Food</Text>
        </View>
        <View>
          <Image source={ shopIcon } style={{ marginRight: 15, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Shop</Text>
        </View>
      </View>
    </View>
  );
}