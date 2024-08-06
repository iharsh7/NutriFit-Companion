import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const ParticularExe = (props) => {
  return (
    <View style={styles.cont0}>
        <View style={styles.cont1}>
      <Image
      style={styles.img1}
      source={{uri:props.img}}
      />
      </View>
        <Text style={styles.txt}>{(props.name.length<25)?props.name.toUpperCase():props.name.slice(0,20).toUpperCase()+"..."}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    img1:{
        height:hp(23),
        width:wp(30),
    },
    cont0:{
        marginBottom:hp(2),
        // borderWidth:2,
        // textAlign:"center",
        alignItems:"center",
        justifyContent:"center"

    },
    txt:{
        marginTop:hp(1),
    },
    cont1:{
        // borderWidth:2,
        width:wp(44),
        height:hp(25),
        flex:1,
        alignItems:"center",
        backgroundColor:"white",
        // marginBottom:hp(2),
        borderRadius:hp(2),

        // marginHorizontal:wp(2),
    }
})

export default ParticularExe