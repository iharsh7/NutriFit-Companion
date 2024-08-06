import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'; // Assuming you're using Expo for StatusBar
import { useNavigation } from '@react-navigation/native';
import ImageSlider from './ImageSlider'; // Corrected file extension
import Guide from './Guide'; // Assuming this is another component

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Gym1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <StatusBar style="light" backgroundColor="#C21E56" />

      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>READY TO</Text>
          <Text style={[styles.title, { color: '#C21E56' }]}>WORKOUT</Text>
        </View>
        
        <TouchableOpacity onPress={() => {navigation.navigate("BookAppointment")}} style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('../../assets/avatar2.png')} />
        </TouchableOpacity>
      </View>

      {/* Image Slider Section */}
      <View style={styles.sliderContainer}>
        <ImageSlider />
      </View>

      {/* Guide Section */}
      <View style={styles.guideContainer}>
        <Guide />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(0),
    paddingTop: hp(2),
    // borderWidth:5,
    // backgroundColor:"yellow",
  },
  header: {
    flexDirection: 'row',
    marginTop:hp(4),
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: hp(2),
    width:wp(100),
    // borderWidth:2,
    paddingLeft:wp(3),
    paddingRight:wp(4)
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(5),
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 28,
  },
  sliderContainer: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
    alignItems: 'center',
    padding:wp(10),
  },
  guideContainer: {
    // flex: , // Take remaining space
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Gym1;
