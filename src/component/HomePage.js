import React from "react";
import { StyleSheet,Link, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import Animated,{ FadeIn, FadeOut, FadeInDown } from 'react-native-reanimated';
import Menu from "./Menu";
import { LinearGradient } from "expo-linear-gradient";
const HomePage = ()=>{
    const navigation = useNavigation();
    return(
        <View style={{
            flex:1,
            justifyContent:"end",
        }}>
            <StatusBar style="light"/>
            <Image style={{
                width:"100%",
                height:"100%",
                position:"absolute"
            }}
            source={require("../../assets/welcome.png")}
            />
            <LinearGradient 
            colors={['transparent','#18181b']}
            style={{width:wp(100),height:hp(70),flex:1,justifyContent:"flex-start",padding:12,marginVertical:8}}
            start={{x:0.5 ,y:0}}
            end={{x:0.5,y:0.8}}
            
            >
                <Animated.View entering={FadeInDown.delay(500).springify()}  style={{flex:1,alignItems:"center",justifyContent:"flex-end",paddingBottom:hp(2),marginBottom:hp(1.5)}}>
                    <Text style={{color:"white",fontSize:hp(6),fontWeight:"bold"}}>
                        Best <Text style={{color:"#C21E56"}}>Workouts</Text>
                    </Text>
                    <Text style={{color:"white",fontSize:hp(6),fontWeight:"bold"}}>For you</Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(1400).springify()} style={{height:hp(8),width:wp(60),margin:"auto",marginBottom:hp(5.4),marginTop:hp(0.7)}}>
                    <TouchableOpacity style={{backgroundColor:"#C21E56",height:"100%",flex:1,alignItems:"center",justifyContent:"center",borderRadius:hp(58)}} onPress={()=>{
                        navigation.navigate("Gym1");
                    }}>
                        <Text style={{color:"white",fontSize:hp(3),fontWeight:"bold"}}>Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>
                </LinearGradient>
            
        </View>
    )
}
export default HomePage;