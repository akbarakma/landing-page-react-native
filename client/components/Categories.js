import React from 'react';
import { View, Image, Text } from 'react-native';
import rideIcon from '../assets/ride-icon.png';
import carIcon from '../assets/car-icon.png';
import foodIcon from '../assets/foodIcon.png';
import shopIcon from '../assets/shopIcon.png';
import packageIcon from '../assets/packageIcon.png';
import medIcon from '../assets/medIcon.png';
import massageIcon from '../assets/massageIcon.png';
import more from '../assets/more.png';

const Categories = () => {
  return(
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
  )
};

export default Categories;