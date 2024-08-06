import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BodyParts from "../api/BodyParts.js"
import axios from 'axios'
import ParticularExe from './ParticularExe.js'
import Exercise from '../api/Explain.js'
const apiCall = async(req_part,setVal,setLoad)=>{
  try{
    const options = {
      method:'GET',
      url:`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${req_part}?limit=20&offset=0 `,
      
      headers:{
        'X-RapidAPI-Key':'8ab005d5a8msh743624d0536efffp126738jsn98f5817486a5',
        'X-RapidAPI-Host':'exercisedb.p.rapidapi.com'
      }
    }
    const response = await axios.request(options);
    console.log(response)
    console.log("HELLO");
    setVal(response.data);
    setLoad(true)
    return response.data;
  }
  catch(err){
    console.log(err);
    console.log("THIS IS ERROR");
  }
}
const GuideDetails = () => {
  const [val,setVal]=useState();
  const [call,setCall]=useState(false);
  const [load,setLoad]=useState(true);
  console.log("---------------------------------------------------------------")
  console.log(load);
  console.log("---------------------------------------------------------------")
    const route = useRoute();
    const {id} = route.params;
    const data = BodyParts.find((ele)=>{
      return id===ele.index;
    })
    const navigation = useNavigation();
    console.log(data);
    useEffect(()=>{
      apiCall(data.name,setVal,setLoad);
    },[])


  if(!load){
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader}/>
    // return(
    //   <View>
    //     <Image
    //     style={{height:500,width:500}}
    //     source={require("../../assets/remove.png")}
    //     />
    //     </View>
    // )
  }
  return(
    <View style={styles.cont0}>
      <View style={styles.cont2}>
        <Image
        style={styles.imagecont2}
        source={data.image}
        />
      </View>
      <View style={styles.backk}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("Gym1")
        }}>
      <Image
      style={{height:"100%",width:"100%"}}
      source={require("../../assets/arrow.png")}
      />
      </TouchableOpacity>
      </View>
      <View style={styles.cont3}>
      <Text style={styles.txt}>{data.name.toUpperCase()} EXERCISES</Text>
      </View>
      <View style={styles.cont4}>
        <FlatList
        numColumns={2}
        data={val}
        showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:100,paddingTop:10}}
      columnWrapperStyle={{justifyContent:"space-between"}}
        renderItem={(ele)=>{
          return(
            <TouchableOpacity onPress={()=>{
              navigation.navigate("FullExercise",{fulldata:ele.item})
            }}>
              {console.log(ele.item.name)}
          <ParticularExe img={ele.item.gifUrl} name={ele.item.name} id={ele.item.id}/>
          </TouchableOpacity>
          )
        }}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cont0:{
    // borderWidth:3,
    flex:1

  },
    cont1:{
        borderWidth:5,
        marginTop:49,
        backgroundColor:"violet",
        width:500,
        height:600,
    },
    imagecont2:{
      height:hp(43),
      width:wp(100),
      // borderRadiusB:hp(6),
      borderBottomRightRadius:hp(5),
      borderBottomLeftRadius:hp(5)
    },
    cont2:{
      // borderWidth:5,
      overflow:"hidden",
      marginTop:hp(4.7),
      position:"relative"
    },
    backk:{
      position:"absolute",
      // borderWidth:5,
      width:42,
      height:42,
      borderRadius:21,
      top:hp(8),
      left:hp(2)

    },
    cont3:{
      // borderWidth:4,
      paddingLeft:wp(4),
      marginTop:hp(2),
    },
    cont4: {
      flex: 1,
      // backgroundColor: 'pink',
      marginVertical: hp(1),
      paddingHorizontal: wp(3),
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"black"
    },
    txt:{
      fontWeight:"bold",
      fontSize:hp(2.4)
    }
})

export default GuideDetails





















