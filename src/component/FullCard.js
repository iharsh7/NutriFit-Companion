import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import crs from '../api/Course'
const FullCard = (props) => {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const course = crs.find(val => props.id === val.id);
    
    if (!course) {
          return <Text>No course found</Text>;
        }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
    return (
      <View style={styles.card}>
        <Image source={course.image} style={styles.image} />
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.course}>Course 1: {course.course1}</Text>
        <Text style={styles.course}>Course 2: {course.course2}</Text>
        <Text style={styles.course}>Course 3: {course.course3}</Text>
        <Text style={styles.price}>Price: ${course.price}</Text>
      </View>
    // <View>
    //     {crs.filter((val)=>{
    //         return props.id===val.id;
    //     }).map((ele)=>{
    //         return(
    //             <View>
    //                 <Text>{ele.title}</Text>
    //                 </View>
    //         )
    //     })}
    //     </View>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      padding: 20,
      margin: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ccc',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    description: {
      fontSize: 16,
      marginBottom: 10,
    },
    course: {
      fontSize: 16,
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    }
  });
  
  export default FullCard;