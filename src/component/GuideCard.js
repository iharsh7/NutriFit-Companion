import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
const GuideCard = (props) => {
  return (
    <View style={[styles.cont, styles.card, styles.shadowProp]}>
    <Text style={styles.txt}>{props.name.toUpperCase()}</Text>
    <View style={{ borderRadius: 22, overflow: 'hidden' }}>
      <Image
        style={{ height: hp(21), width: "100%" }}
        source={props.img}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.linearGradient}
      />
    </View>
  </View>
);
};
const styles = StyleSheet.create({
cont:{
    // borderWidth:1,
    padding:7,
    position:"relative",
    margin:3,
    width:195,
    shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        // shadowOpacity: 0.3,
        // shadowRadius: 25,
        // elevation: 2,

},
txt:{
    textAlign:"center",
    fontWeight:"700",
    marginBottom:3,
    position:"relative",
    top:hp(19),
    zIndex:1,
    color:"white",
    fontWeight:"bold",
},
linearGradient: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: hp(21),
},

})

export default GuideCard