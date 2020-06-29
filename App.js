import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';


export default function App() {
    return ( 
        <View>
            <SearchScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
