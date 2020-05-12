import React from 'react';
import { Image } from 'react-native';
import profileIcon from '../assets/profileIcon.png';
import { Searchbar } from 'react-native-paper';

const TopNavbar = () => {
  return (
    <>
      <Searchbar
        placeholder="Search"
        value=''
        style={{ position: 'absolute', top: 40, width: 270, marginLeft: 15 }}
        />
      <Image source={ profileIcon } style={{ top: 38, right: 15, position: 'absolute', zIndex: 2 }} />
    </>
  );
};

export default TopNavbar;