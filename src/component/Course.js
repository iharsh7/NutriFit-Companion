import { View, Text, FlatList,Image,StyleSheet } from 'react-native'
import React from 'react'
import crs from '../api/Course'
import Card from './Card'
const Course = () => {
  return (
    <View style={{
        // borderWidth:3,
        alignItems:"center",
    }}>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={crs}
    //   keyExtractor={(key)=>}
        renderItem={(ele)=>{
            {console.log(ele)}
            return(
                // {console.log()}
                <Card id={ele.item.id} course1={ele.item.course1} course2={ele.item.course2} course3={ele.item.course3}  image={ele.item.image} price={ele.item.price} title={ele.item.title} description={ele.item.description} />
            )
        }}
      />
    </View>
  )
}

export default Course