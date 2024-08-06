// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator , ScrollView, Image, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Linking } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import HomePage from './src/component/HomePage';
import OtherPage from './src/component/OtherPage';
import Course from './src/component/Course';
import Gym1 from './src/component/Gym1';
import About from './src/component/About';
import ContactUs from './src/component/ContactUs';
import OrderItem from './src/component/OrderItem';
import BookAppointment from './src/component/BookAppointment';
import DietPlan from './src/component/DietPlan';
import axios from 'axios';
import ViewImage from './src/component/ViewImage';
import HelpDiet from './src/component/HelpDiet';
import img from './assets/img1.jpg'
import NetFlixCard from './src/component/NetFlixCard'
import GuideDetails from './src/component/GuideDetails';
import GetDiet from './src/component/GetDiet';
import FullExercise from './src/component/FullExercise';
export default function App() {
  const [val,setVal]=useState(0);
  const [arr,setArr]=useState([]);
  const [data,setData]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [loaded,setLoaded]=useState(true);
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const Stack = createNativeStackNavigator();
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  >
        <Stack.Screen name="Home" component={HomePage} options={{headerShown:false}} />
        {/* <Stack.Screen name="Other" component={OtherPage}/> */}
        <Stack.Screen name="About" component={About} options={{headerTitle:"About Us",headerTitleStyle:{
          fontSize:28,
          
        },headerTitleAlign:"center"}}/>
        <Stack.Screen name="Course" component={Course} options={{headerTitleStyle:{fontSize:28},headerTitleAlign:"center"}}/>
        <Stack.Screen name="ContactUs" component={ContactUs} options={{headerTitleStyle:{fontSize:28},headerTitleAlign:"center"}}/>
        <Stack.Screen name="Gym1" component={Gym1} options={{headerShown:false}}/>
        <Stack.Screen name="OrderItem" component={OrderItem} options={{headerShown:false}}/>
        <Stack.Screen name="GuideDetails" component={GuideDetails} options={{headerShown:false}}/>
        <Stack.Screen name="FullExercise" component={FullExercise} options={{headerShown:false}}/>
        <Stack.Screen name="BookAppointment" component={BookAppointment} options={{headerShown:false}}/>
        <Stack.Screen name="DietPlan" component={DietPlan} options={{headerShown:false}}/>
        <Stack.Screen name="HelpDiet" component={HelpDiet} options={{headerShown:false}}/>
        <Stack.Screen name="GetDiet" component={GetDiet} options={{headerShown:false}}/>
      </Stack.Navigator>
      </NavigationContainer>
    // <View style={{
    //   flexDirection:"column",
    //   justifyContent:"centre",
    //   alignItems:"center",
    //   borderWidth:0,
    //   width:"100%",
    //   marginVertical:45


    // }}>
    //   <View style={{borderWidth:0,
      
    //   }}>
    //     <Text style={{fontSize:25,
    //     fontWeight:"bold"}}>CONTACT US</Text>
    //     </View>

    //     <View style={{borderWidth:0, marginVertical:12}}>
    //       <Text style={{fontWeight:"bold"}}>Login Form</Text>
    //       <Text>You can reach us anytime via abc@gmail.com</Text>
    //     </View>

    //     <View>
    //       {/* <input type="email" name="" id="" style={{borderWidth:0}}/> */}
    //       <Text style={{marginBottom:10}}>Enter Your email</Text>
    //       <TextInput   value={email} onChangeText={(e)=>{
    //         // setEmail(e)
    //         setEmail(e)
    //         // console.log(e);
    //         console.log(email);
    //       }} style={{borderWidth:1,marginBottom:10}}/>
    //       <Text style={{marginBottom:10}}>Enter Your Password</Text>
    //       <TextInput  value={password} onChangeText={(e)=>{
    //         // setEmail(e)
    //         setPassword(e)
    //         // console.log(e);
    //         console.log(password);
    //       }}   style={{borderWidth:1,marginBottom:10}} autoCapitalize={"none"} />

    //       {/* <input type="radio" name="" id="" /> */}
    //       </View>
    //       <View>
    //         <TouchableOpacity style={{
    //           borderWidth:2,
    //           padding:9,
    //           marginTop:10
    //         }} onPress={()=>{
    //           Alert.alert(email + " " + password);
    //         }}><Text>Sign In</Text>
    //           </TouchableOpacity>
    //       </View>


    // {/* {loaded?(
    //   <View style={{
    //     justifyContent:"center",
    //     width:"100%",
    //   }}>
    //   <ActivityIndicator/>
    //   </View>
    //   )
    //   :(
    //     <View> */}
    //     {/* <FlatList
    //     horizontal
    //     showsHorizontalScrollIndicator={false}
    //     data={data}
    //     renderItem={(ele)=>{
    //       return(
    //         <View style={{
    //           width:300,
    //           height:300,
    //           marginHorizontal:5,
    //           marginVertical:100,
    //           backgroundColor:"red",
    //           // color:"white",
    //         }}>
    //           <Text>{ele.item.name}</Text>
    //           </View>
    //       )
    //     }}
    //     />  
    //     </View>
    //   )} */}
    //   </View>
    // <ScrollView  contentContainerStyle={styles.contentContainer}>
      
    // <View style={styles.container}>
    //   {/* <NetFlixCard/> */}
    //   {/* <Text>HELLO WORLD!</Text>
    //   <FlatList horizontal showsHorizontalScrollIndicator={false} data={names} renderItem={(ele)=>{
    //     return(
    //       <View style={styles.div1}>
    //         <Text>
    //            {ele.item.name}
    //         </Text>
    //         </View>
    //     )
    //   }} />
    //   <ViewImage src={require("./assets/img1.jpg")}/>
    //   <ViewImage src="https://images.unsplash.com/photo-1718305028213-96811fc88d16?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"/> */}
    //   {/* <Image
    //   style={styles.imgg}
    //   source={require('./assets/img1.jpg')}
    //   /> */}
    //   <FlatList
    //   horizontal
    //   data={series}
    //   renderItem={(ele)=>{
    //     return(
    //       <TouchableOpacity onPress={()=>{
    //         Linking.openURL('https://www.cisco.com/c/m/en_us/training-events/events-webinars/fy25-cisco-pre-placement.html')
    //       }}>
    //       <View  style={styles.list}>
    //         {/* <Text>{(ele.item)}</Text> */}
    //         <Text style={styles.title}>{(ele.index+1)}</Text>
    //         <Text style={styles.title}>{(ele.item.title)}</Text>
    //         {/* <Text style={styles.title}>{console.log(ele)}</Text> */}
    //         </View>
    //         </TouchableOpacity>
    //     )
    //   }}
    //   />

    //   <View style={styles.parent}>
    //     <Text  style={styles.box1}>BOX-1</Text>
    //     <Text style={styles.box2}>BOX-2</Text>
    //     <Text style={styles.box3}>BOX-3</Text>
    //     <Text style={styles.box4}>BOX-4</Text>
    //     <Text style={styles.box5}>BOX-5</Text>
    //   </View>
      

    // </View>

    // <View>
    //   <Text>{val}</Text>
    //   <TouchableOpacity onPress={()=>{
    //     Alert.alert("CHAL HAAT MOTI");
    //     // setArr([...arr,val]);
    //     // console.log(arr);
    //     setVal(val+10);
    //   }}>
    //     <Text> INCREASE </Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={()=>{
    //     (val!=0)?setVal(val-10):0;
    //   }}>
    //     <Text> DECREASE </Text>
    //   </TouchableOpacity>
    // </View>

    // <View>
    //   <TouchableOpacity onPress={()=>{
    //     setArr([...arr,randomColor()]);
    //   }}>
    //     <Text>Click To Generate Random Color</Text>
    //   </TouchableOpacity>

    //   <FlatList 
    //   data={arr}
    //   renderItem={(ele)=>{
    //     return(
    //       <View>
    //         <Text
    //         style={{backgroundColor:ele.item,
    //         width:100,
    //         height:100,
    //         borderRadius:3,
    //         marginVertical:5
    //         }}
    //         ></Text>
    //         </View>
    //     )
    //   }}
    //   />
      

    // </View>

    //  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:100
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  div1:{
    backgroundColor:"blue",
    color:"white",
    width:100,
    height:125,
    margin:7
  },
  imgg:{
    height:300,
    width:300,    
  },
  btn:{
    textAlign:"center",
    marginVertical:40,
    marginTop:100,
    fontSize:30,
    width:75,



  },
  list:{
    backgroundColor:"blue",
    width:150,
    margin:10,
    height:undefined,
    aspectRatio:1
  

  },
  title:{
    fontSize:25,
    color:"white",
    // fontWeight:"bold",
  },
  parent: {
    borderWidth:0,
    width: "100vw",
    marginTop: 30,
    height:500,
    padding:25,
    // flexDirection: "row",
    // alignItems: 'flex-start', // Align items to the start of the column
    position:"relative",
    
  },
  box1: {
    width: "25%", // Use 250% width for better visibility
    backgroundColor: "orange",
    padding: 12,
    // marginBottom: 5, // Add margin to separate the boxes
    // textAlign: 'center',
    position:"absolute",
    top:0,
  },
  box2:{
    width:"25%",
    // marginBottom: 5, // Add margin to separate the boxes
    backgroundColor:"gold",
    padding:12,
    position:"absolute",
    top:0,
    right:0,

  },
  box3:{
    width:"25%",
    backgroundColor:"green",
    padding:12,
    position:"absolute",
    bottom:0,
    left:0,
    

  },
  box4:{
    width:"25%",
    backgroundColor:"blue",
    padding:12,
    position:"absolute",
    bottom:0,
    right:0,

  },
  box5:{
    width:"25%",
    backgroundColor:"yellow",
    padding:12,
    position:"absolute",
    top:"50%",
    right:"50%"

  },


});
