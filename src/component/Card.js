import { View, Text, Image,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = (props) => {
    const navigation =useNavigation();
  return (
    <View style={styles.card}>
      <Text style={{fontSize:20,fontWeight:"bold"}}>{props.title}</Text>
      <Image style={{width:350,height:200,marginVertical:10}} source={props.image}/>
      
      <Text>{props.description}</Text>
      <TouchableOpacity
      onPress={()=>{
        console.log(props.id);
        navigation.navigate('OrderItem',{id:props.id})
      }}
      style={styles.btn}
      >
        <Text style={styles.btntxt}>Order Now</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    card:{
    //    borderWidth:3,
       marginVertical:10,
       width:360, 
       alignItems:"center",
       justifyContent:"center",
       padding:18,
       backgroundColor:"white"

    },
    btn:{
        borderWidth:0,padding:9,margin:13,
        backgroundColor:"blue",
        // color:"white",
        borderRadius:8

    },
    btntxt:{
        color:"white",
        fontWeight:"bold",
    }
})
export default Card