import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const Root = ()=>{
    return(
        <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
  
              if (route.name === 'home') {
                iconName = 'home';
              } else if (route.name === 'explore') {
                iconName = 'bandcamp';
              } else if (route.name === 'subscribe') {
                iconName = 'play-circle';
              }
  
              // You can return any component that you like here!
              return <FontAwesome5 name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          >
            <Tabs.Screen name="home" component={HomeScreen}/>
            <Tabs.Screen name="explore" component={Explore}/>
            <Tabs.Screen name="subscribe" component={Subscribe}/>
        </Tabs.Navigator>
    )
}

export default function App() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="rootHome" component={Root}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Video" component={VideoPlayer}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
