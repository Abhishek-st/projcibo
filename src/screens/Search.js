import React, {useState} from 'react';
import { StyleSheet, View, ScrollView, TextInput, FlatList,ActivityIndicator } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Minicard from '../components/Minicard';

//  

export default function SearchScreen(){
    const [value, setValue] = useState("")
    const [miniCard, setMiniCard] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchData =() => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBEXTs41MixQNa2JpOV6C4s31MeEA2fLng`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false)
            setMiniCard(data.items)
        })
    }

    return(
        <View>
            <View style={{
                padding:5,
                flexDirection:'row',
                justifyContent:"space-around",
                elevation:4,
                backgroundColor:'white'
            }}>
                <FontAwesome5 style={{marginLeft:15}} name={'arrow-left'} size={30} color="#212121" />
                <TextInput 
                    value={value}
                    onChangeText = {(text)=>setValue(text)}
                    style={{width:"70%", backgroundColor:'#e6e6e6'}}
                />
                <FontAwesome5 style={{marginLeft:15}} name={'paper-plane'} size={30} onPress={()=>fetchData()} color="#212121" />
            </View>
            {loading ? <ActivityIndicator style={{marginTop:10}} size="large" color="red" /> : null}
            <FlatList data={miniCard} 
                    renderItem={({item})=>{
                        return <Minicard 
                                    videoId={item.id.videoId}
                                    title={item.snippet.title}
                                    channel={item.snippet.channelTitle}
                                />
                    
                    }}
                    keyExtractor={item=>item.id.videoId}
            />
        </View>
    );
}

