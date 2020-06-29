import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import {StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation()
    return ( 
        <View style={{
            height:50,
            backgroundColor:'white',
            //marginTop: StatusBar.currentHeight,
            flexDirection:'row',
            justifyContent: "space-between",
            elevation:10
        }} >
            
            <View style={{flexDirection:'row', margin:5}}>
                <FontAwesome5 style={{marginLeft:15}}name={'youtube'} size={30} color="red" />
                <Text style={{fontSize:20, marginLeft:5, fontWeight:'bold'}}>CIBO</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', width:150, margin:5}}>
                <FontAwesome5 style={{marginLeft:15}} name={'video'} size={30} color="#212121" />
                <FontAwesome5 style={{marginLeft:15}} name={'search'} size={30} color="#212121" onPress={()=>navigation.navigate('Search')}/>
                <FontAwesome5 style={{marginLeft:15}} name={'user'} size={30} color="#212121" />
            </View>

        </View>
    );
}

