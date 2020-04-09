import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  },
  image: {
    resizeMode: 'stretch',
    width: '65%',
    height: '30%',
    marginBottom: '9%',
  },
  title: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: '700',
    marginBottom: '30%',
  },
});

const App = () => {
  let isLoading;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image style={styles.image} source={require('./img/start.png')}></Image>
      <ActivityIndicator color="black"></ActivityIndicator>
      <Text style={styles.title}>꿀이의 일기</Text>
    </View>
  );
};

export default App;
