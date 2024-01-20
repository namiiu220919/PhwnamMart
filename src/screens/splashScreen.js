import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={st.container}>
      <Image style={st.logo}source={require('../img/PhwNamShoplogo.png')}/>
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width:400,
    height: 400
  }
  
});

export default SplashScreen;