import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet,Link, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const OtherPage = ({navigation})=>{
    
    return(
        <View>
            <Text> Welcome To OtherPage...</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Home")
            }}>
                <Text>Home Page</Text>
            </TouchableOpacity>
            </View>
    )
}
export default OtherPage;