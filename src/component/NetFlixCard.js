import React from "react";
import { StyleSheet, View, Image, Text, Linking, button } from "react-native";
import { TouchableOpacity } from "react-native";

const NetFlixCard = ()=>{
    return(
        <View style={styles.container1}>
            <Text style={styles.title1}> NETFLIX CARD </Text>
            <Image
            style={styles.imgg}
            source={require('../../assets/img2.jpg')}
            />
            {/* <button 
            style={styles.btn1}
            onClick={(ele)=>{
                Linking.openURL('https://www.netflix.com/title/80013872')
            }}> 
            <Text>Watch Now</Text>
            </button> */}
            <TouchableOpacity
            onPress={(ele)=>{
                Linking.openURL('https://www.netflix.com/watch/80200957?trackId=255824129&tctx=0%2C1%2C9c9c24b0-1310-4df2-9804-568205dcce78-200661972%2C9c9c24b0-1310-4df2-9804-568205dcce78-200661972%7C2%2Cunknown%2C%2C%2CtitlesResults%2C80200957%2CVideo%3A80200957%2CminiDpPlayButton')
            }}
            >
                <Text style={styles.btn1}>Watch Now</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container1:{
        // borderWidth:2,
        borderColor:"black",
        margin:"auto",
        width:"25%"
    },
    title1:{
        textAlign:"centre",
        // borderWidth:2,
        color:"red",
        fontWeight:"bold",
        borderColor:"black",
        justifyContent:"center",
        alignContent:"center",
        fontSize:35,
        margin:"auto",

    },
imgg:{
    width:"100%",
    height:undefined,
    aspectRatio:1,
    // marginLeft:23
},
btn1:{
    padding:12,
    backgroundColor:"blue",
    color:"white",
    marginTop:35,
    borderWidth:0,

},
btn:{

}
})
export default NetFlixCard;
