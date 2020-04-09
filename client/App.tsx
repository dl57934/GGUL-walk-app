import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CommonActions, NavigationContainer} from '@react-navigation/native';

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
    marginBottom: '5%',
  },
  title: {
    fontSize: 35,
    color: '#FFF',
    fontWeight: '700',
    marginBottom: '30%',
  },
});

let SplashScreen = ({navigation}) => {
  setTimeout(() => navigation.navigate('Details'), 2000);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image style={styles.image} source={require('./img/start.png')}></Image>
      <ActivityIndicator animating={true} color="black"></ActivityIndicator>
      <Text style={styles.title}>꿀이의 일기</Text>
    </View>
  );
};

function DetailsScreen({navigation}) {
  navigation.dispatch(state => {
    const routes = state.routes.filter(r => r.name != 'Splash');

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
