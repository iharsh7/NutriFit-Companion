import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const apiCall = async (sex, age, h_feet, h_inch, weight, activity, navigation) => {
    console.log(sex,age,h_feet,h_inch,weight,activity);
  try {
    const options = {
      method: "GET",
      url: `https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=std&sex=${sex}&age_value=${age}&age_type=yrs&feet=${h_feet}&inches=${h_inch}&lbs=${weight}&activity_level=${activity}`,
    //url: "https://nutrition-calculator.p.rapidapi.com/api/nutrition-info?measurement_units=std&sex=female&age_value=20&age_type=yrs&feet=5&inches=2&lbs=120&activity_level=Active",
      headers: {
        'X-RapidAPI-Host': 'nutrition-calculator.p.rapidapi.com',
        'X-RapidAPI-Key': '8ab005d5a8msh743624d0536efffp126738jsn98f5817486a5'
      }
    };
    const response = await axios.request(options);
    console.log(response.data);
    navigation.navigate("GetDiet",{dietData:response.data});
  } catch (err) {
    console.log(err);
    return (err);
  }
}

const HelpDiet = () => {
  const navigation = useNavigation();
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [h_feet, setH_feet] = useState('');
  const [h_inch, setH_inch] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');

  return (
    <ImageBackground
      source={{ uri: "https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fsb3JpZXxlbnwwfHwwfHx8MA%3D%3D" }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.backk}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("BookAppointment")
        }}>
      <Image
      style={{height:"100%",width:"100%"}}
      source={require("../../assets/arrow.png")}
      />
      </TouchableOpacity>
      </View>
        <View style={styles.cont3}>
          <TextInput
            style={styles.input}
            placeholder='Enter Your Sex'
            placeholderTextColor='#ccc'
            onChangeText={text => setSex(text)}
            value={sex.toLowerCase()}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter Your Age'
            placeholderTextColor='#ccc'
            onChangeText={text => setAge(text)}
            value={age}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter Your Height (Feet)'
            placeholderTextColor='#ccc'
            onChangeText={text => setH_feet(text)}
            value={h_feet}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter Your Height (Inches)'
            placeholderTextColor='#ccc'
            onChangeText={text => setH_inch(text)}
            value={h_inch}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter Your Weight'
            placeholderTextColor='#ccc'
            onChangeText={text => setWeight(text)}
            value={weight}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter Your Activity Level'
            placeholderTextColor='#ccc'
            onChangeText={text => setActivity(text)}
            value={activity}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            apiCall(sex, age, h_feet, h_inch, weight, activity, navigation);
          }}
        >
          <Text style={styles.buttonText}>Get Your Diet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>GOT IT</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default HelpDiet;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: wp(100),
    height: hp(110),
    resizeMode: 'cover',
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(5),
    paddingVertical:hp(15)
  },
  cont3: {
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: wp(80),
    padding: wp(2),
    borderWidth: hp(0.2),
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: hp(2),
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  button: {
    width: wp(80),
    padding: wp(4),
    backgroundColor: '#FDDA0D',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: hp(2),
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
