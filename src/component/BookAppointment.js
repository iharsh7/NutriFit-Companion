import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { useEffect } from 'react'
import Diet from '../api/Diet'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const apiCall = async(type,goal,calorie,protein,fat,carbohydrates,allergy,planType,freq,navigation)=>{
    try{
        const options = {
            method:'POST',
            url:`https://ai-diet-planner.p.rapidapi.com/api/generate `,
            
            headers:{
                'Content-Type': 'application/json',
                'X-RapidAPI-Host':'ai-diet-planner.p.rapidapi.com',
          'X-RapidAPI-Key':'8ab005d5a8msh743624d0536efffp126738jsn98f5817486a5'
        },
        data:{
            "dietry_prefs": type,
            "goal":goal,
            "caloric_intake":calorie,
            "proteins":protein,
            "fats":fat,
            "carbohydrates":carbohydrates,
            "allergies_or_restrictions":allergy,
            "plan_type":"daily",
            "meals_frequency":freq
            
        }
    }
      const response = await axios.request(options);
    navigation.navigate("DietPlan",{plan:response})
    console.log(response)
    console.log("HELLO");
    //   setVal(response.data);
    //   setLoad(true)
    return response.data;
    }
    catch(err){
        console.log(err);
        console.log("THIS IS ERROR");
    }
}
const BookAppointment = () => {
    const [type,setType] = useState();
    const [goal,setGoal] = useState();
    const [calorie,setCalorie] = useState();
    const [protein,setProtein] = useState();
    const [fat,setFat] = useState();
    const [carbohydrates,setCarbohydrates] = useState();
    const [allergy,setAllergy] = useState();
    const [planType,setPlanType] = useState();
    const [freq,setFreq] = useState();
    const navigation = useNavigation();
    // useEffect(()=>{
    //     apiCall(type,goal,calorie,protein,fat,carbohydrates,allergy,planType,freq)
    // },[])
    return (
        <View style={styles.cont1}>
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
          <Image style={styles.img1} source={require("../../assets/dinner.jpg")} />
          <LinearGradient
            colors={['transparent', '#18181b']}
            style={styles.gradient}
            end={{ x: 0.5, y: 0.9 }}
            start={{ x: 0.9, y: 0 }}
          >
            <View style={styles.cont2}>
              <Text style={styles.headerText}>KNOW YOUR <Text style={styles.todays}>TODAY'S</Text> DIET</Text>
              <TouchableOpacity onPress={()=>{
                navigation.navigate("HelpDiet")
              }}>
              <Text style={styles.todays2}>Need Help?</Text>
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Type"
                placeholderTextColor="#ccc"
                onChangeText={text => setType(text)}
                value={type}
              />
              <TextInput
                style={styles.input}
                placeholder="Goal"
                placeholderTextColor="#ccc"
                onChangeText={text => setGoal(text)}
                value={goal}
              />
              <TextInput
                style={styles.input}
                placeholder="Calorie"
                placeholderTextColor="#ccc"
                onChangeText={text => setCalorie(text)}
                value={calorie}
              />
              <TextInput
                style={styles.input}
                placeholder="Protein"
                placeholderTextColor="#ccc"
                onChangeText={text => setProtein(text)}
                value={protein}
              />
              <TextInput
                style={styles.input}
                placeholder="Fat"
                placeholderTextColor="#ccc"
                onChangeText={text => setFat(text)}
                value={fat}
              />
              <TextInput
                style={styles.input}
                placeholder="Carbohydrates"
                placeholderTextColor="#ccc"
                onChangeText={text => setCarbohydrates(text)}
                value={carbohydrates}
              />
              <TextInput
                style={styles.input}
                placeholder="Allergy"
                placeholderTextColor="#ccc"
                onChangeText={text => setAllergy(text)}
                value={allergy}
              />
              {/* <TextInput
                style={styles.input}
                placeholder="Plan Type"
                placeholderTextColor="#ccc"
                onChangeText={text => setPlanType(text)}
                value={planType}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="Frequency"
                placeholderTextColor="#ccc"
                onChangeText={text => setFreq(text)}
                value={freq}
              />
    
              <TouchableOpacity onPress={()=>{
                apiCall(type,goal,calorie,protein,fat,carbohydrates,allergy,planType,freq,navigation);
                
              }}>
                <Text style={styles.touch}>Get Your Diet</Text>
              </TouchableOpacity>
            </ScrollView>
          </LinearGradient>
        </View>
      );
    
}

export default BookAppointment
const styles = StyleSheet.create({
    cont1: {
      flex: 1,
    },
    backk:{
      position:"absolute",
      // borderWidth:5,
      width:42,
      height:42,
      borderRadius:21,
      top:hp(8),
      left:hp(2),
      zIndex:5,

    },
    img1: {
      width: '100%',
      height: '30%',
    },
    todays:{
        color:"#C21E56",
        fontWeight:"bold",
        // fontSize:hp(1.8)
    },
    todays2:{
        color:"#C21E56",
        fontWeight:"bold",
        fontSize:hp(2),
        marginTop:hp(2),
    },
    gradient: {
      width: wp(100),
      height: hp(70),
      flex: 1,
      justifyContent: "flex-start",
      padding: 12,
      marginVertical: 8,
    },
    cont2: {
      marginBottom: 15,
      alignItems:"center"

    },
    headerText: {
      fontSize: 30,
      color: "smoke-white",
      fontWeight: "bold",
    },
    inputContainer: {
      paddingVertical: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      color: "white",
      padding: 10,
      marginVertical: 8,
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background

    },
    touch:{
        backgroundColor:"white",
        paddingVertical:hp(2),
        fontWeight:"bold",
        width:wp(40),
        paddingHorizontal:"auto",
        marginTop:hp(2),
        borderRadius:hp(1),
        textAlign:"center"
    }
  });
  
  