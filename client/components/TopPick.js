import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import TopPickCard from './TopPickCard';

const TopPick = () => {
  return (
    <>
      <Text style={{ marginLeft: 15, marginTop: 25, fontSize: 24, marginBottom: 15 }}>Top Pick For You</Text>
      <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
        <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false }>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>All</Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>COVID-19</Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>Entertainment</Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>Food</Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>Lifestyle</Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>Promos</Chip>
          <Chip onPress={() => console.log('Pressed')} style={{ marginRight: 5 }}>Shopping</Chip>
        </ScrollView>
      </View>
      <ScrollView horizontal={ true } style={{ marginLeft: 5, padding: 10, marginBottom: 15 }} showsHorizontalScrollIndicator={ false }>
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
        <TopPickCard />
      </ScrollView>
    </>
  )
};

export default TopPick;