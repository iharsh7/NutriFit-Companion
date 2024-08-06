import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
const ViewImage = (props)=>{
return(
    <View>
        <Text>HELLO FROM VIEWIMAGE</Text>
        {/* <Image
        style={styles.imgg}
        source={require('../../assets/img1.jpg')}
        /> */}
        <TouchableOpacity 
        onPress={()=>{
            console.log(Date())
        }}
        >

        <Image
        style={styles.imgg}
        source={props.src}
      />
      </TouchableOpacity>
        </View>
)
}
const styles = StyleSheet.create({
imgg:{
    height:300,
    width:300,
    // marginTop:200,
    // marginBottom:200
}
})
export default ViewImage;