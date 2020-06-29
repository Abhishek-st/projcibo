import React from 'react';
import { StyleSheet, View, Text, Image, Button, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'react-native';


const Card = () =>{
    return(
        <View style={{elevation:4, margin:3}}>

            <Image 
                source={{uri: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"}} 
                style={{width:"100%", height:200}}
            />

            <View style={{flexDirection:'row', margin:5}}>
                <FontAwesome5 style={{marginLeft:15}} name={'user'} size={30} color="#212121" />
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:20, width:Dimensions.get("screen").width - 50}} ellipsizeMode="tail" numberOfLines={1}>this is title</Text>
                    <Text>this is channelName</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;
