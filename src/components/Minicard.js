import React, {useState} from 'react';
import {View, Text, Dimensions,Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Minicard(props){
    return(
        <View style={{flexDirection:'row', margin:10, marginBottom:0}}>
            <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{width:"45%", height:100}}
            />

            <View style={{padding:7}}>
                <Text 
                style={{fontSize:15, width:Dimensions.get("screen").width / 2}} 
                ellipsizeMode="tail" 
                numberOfLines={3}
                >
                   {props.title}
                </Text>

    <Text style={{fontSize:12}}>{props.channel}</Text>
            </View>
        </View>
    );
}

