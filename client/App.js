import React from 'react';
import { View, ScrollView } from 'react-native';
import TopNavbar from './components/TopNavbar';
import YourPromo from './components/YourPromo';
import Categories from './components/Categories';
import TopPick from './components/TopPick';
import PromoCard from './components/PromoCard';
import FoodBestPick from './components/FoodBestPick';
import ShopBestPick from './components/ShopBestPick';

export default function App() {
  return (
    <View>
      <TopNavbar />
      <ScrollView style={{ marginTop: 100 }} showsVerticalScrollIndicator={ false }>
        <YourPromo />
        <Categories />
        <TopPick />
        <PromoCard />
        <PromoCard />
        <FoodBestPick />
        <PromoCard />
        <ShopBestPick />
        <PromoCard />
      </ScrollView>
    </View>
  );
}