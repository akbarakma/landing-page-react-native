import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Searchbar, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import profileIcon from './assets/profileIcon.png';
import rideIcon from './assets/ride-icon.png';
import carIcon from './assets/car-icon.png';
import foodIcon from './assets/foodIcon.png';
import shopIcon from './assets/shopIcon.png';
import packageIcon from './assets/packageIcon.png';
import medIcon from './assets/medIcon.png';
import massageIcon from './assets/massageIcon.png';
import more from './assets/more.png';

export default function App() {
  return (
    <View>
      <Searchbar
        placeholder="Search"
        value=''
        style={{ position: 'absolute', top: 40, width: 270, marginLeft: 15 }}
      />
      <Image source={ profileIcon } style={{ top: 38, right: 15, position: 'absolute', zIndex: 2 }} />

      <ScrollView>
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Card style={{ width: 330 }}>
          <Card.Cover style={{ height: 100 }} source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>Your Promo</Title>
          </Card.Content>
        </Card>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', flexWrap: 'wrap', padding: 10 }}>
        <View style={{ marginBottom: 20 }}>
          <Image source={ rideIcon } style={{ marginRight: 20, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Ride</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Image source={ carIcon } style={{ marginRight: 20, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 27 }}>Car</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Image source={ foodIcon } style={{ marginRight: 20, marginLeft: 15, height: 50, width: 50 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Food</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Image source={ shopIcon } style={{ marginRight: 20, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Shop</Text>
        </View>
        <View>
          <Image source={ packageIcon } style={{ marginRight: 20, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 20 }}>Send</Text>
        </View>
        <View>
          <Image source={ medIcon } style={{ marginRight: 20, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 23 }}>Med</Text>
        </View>
        <View>
          <Image source={ massageIcon } style={{ marginRight: 20, marginLeft: 15 }} />
          <Text style={{ fontSize: 18, marginRight: 10, marginLeft: 5 }}>Massage</Text>
        </View>
        <View>
          <Image source={ more } style={{ marginRight: 20, marginLeft: 11 }} />
          <Text style={{ fontSize: 18, marginRight: 15, marginLeft: 17 }}>More</Text>
        </View>
      </View>

      <Text style={{ marginLeft: 15, marginTop: 25, fontSize: 24 }}>Top Pick For You</Text>
        <ScrollView horizontal={ true } style={{ marginLeft: 10, padding: 10 }}>
          <Card style={{ width: 280, marginRight: 20 }}>
            <Card.Cover style={{ height: 120 }} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
              <Title>Lorem Ipsum</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ width: 280, marginRight: 20 }}>
            <Card.Cover style={{ height: 120 }} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
              <Title>Lorem Ipsum</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ width: 280, marginRight: 20 }}>
            <Card.Cover style={{ height: 120 }} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
              <Title>Lorem Ipsum</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ width: 280, marginRight: 20 }}>
            <Card.Cover style={{ height: 120 }} source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Content>
              <Title>Lorem Ipsum</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
            </Card.Content>
          </Card>
        </ScrollView>
      </ScrollView>
    </View>
  );
}