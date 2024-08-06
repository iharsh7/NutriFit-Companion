import { View, Text ,TouchableOpacity,FlatList} from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import BodyParts from "../api/BodyParts"
import GuideCard from './GuideCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const Guide = () => {
    const navigation = useNavigation();
  return (
    <View style={{borderWidth:0,width:wp(100),marginVertical:hp(26),}}>
      <View style={styles.cont1}>
        <Text style={styles.txt}>EXERCISES</Text>
      </View>
      <FlatList 
      data={BodyParts}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:100,paddingTop:10}}
      columnWrapperStyle={{justifyContent:"space-between"}}
      renderItem={(ele)=>{
        {console.log(ele)}
        return(
            <TouchableOpacity
            onPress={()=>{
              console.log(ele.item.index)
                navigation.navigate("GuideDetails",{id:ele.item.index})
            }}
            >
                <GuideCard img={ele.item.image} name={ele.item.name}/>
                </TouchableOpacity>
            // <View>
            //    <Text> {ele.item.name}</Text>
            // </View>
            
        )
      }}
      />

      
    </View>
  )
}
const styles = StyleSheet.create({
  cont1:{
    borderWidth:0,
    // marginVertical:hp(4),
    marginTop:hp(0),
    height:hp(7),
    paddingTop:hp(3),
    paddingLeft:wp(5)
  },
  txt:{
    fontSize:hp(3),
    fontWeight:"bold",
    // textAlign:"center"

  }
})
export default Guide
