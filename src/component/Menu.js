import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation()
  return (
    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <TouchableOpacity   onPress={()=>{
        navigation.navigate("Home")
      }}>
        <Image style={{width:20,height:30}} source={{uri:"https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"}}/>
      </TouchableOpacity>
      <TouchableOpacity   onPress={()=>{
          navigation.navigate("Course")
        }}>
      <Image style={{width:35,height:30}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1_k1mevPwlTsHEIxS0EZO3WCkRKB3kBYZQ&s"}}/>
        {/* <Text style={{marginRight:5,fontWeight:"bold",fontSize:17}}>Course</Text> */}
      </TouchableOpacity>
      <TouchableOpacity   onPress={()=>{
          navigation.navigate("About")
        }}>
          <Image style={{width:35,height:30}} source={{uri:"https://i.pinimg.com/474x/48/8b/5d/488b5dcbf67e5f52a918e8efa6f2adee.jpg"}}/>
      {/* <Text style={{marginRight:5,fontWeight:"bold",fontSize:17}}>About</Text> */}
      </TouchableOpacity>
      <TouchableOpacity   onPress={()=>{
          navigation.navigate("ContactUs")
        }}>
          <Image  style={{width:28,height:30}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3D09B8QpP_5L386kGeIb1Jb58nq_2J9pbw&s"}}/>
      </TouchableOpacity>
      
    </View>
  )
}

export default Menu