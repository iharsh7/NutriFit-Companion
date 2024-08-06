import React from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
// import Carousel from 'react-native-snap-carousel'
import Carousel from 'react-native-reanimated-carousel'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { ActivityIndicator } from 'react-native'

const ImageSlider = () => {
    const { width, height } = Dimensions.get('window');    
    const images = [
        require('../../assets/slide2.png'),
        require('../../assets/slide1.png'),
        require('../../assets/slide3.png'),
        require('../../assets/slide4.png'),
        require('../../assets/slide5.png'),
    ]
    const getNum = ()=>{
        return Math.floor(Math.random() * 5) + 1;
    }
  return (
    <View style={{borderWidth:0,position:"absolute"}}>
      {/* <Text>Image</Text> */}
      <Carousel
      loop
      width={wp(100)}
      height={width/1.4}
      autoPlay={true}
      mode="parallax"
      parallacScrollingScale={0.9}
      parallaxScrollingOffset={50}
      data={images}
      autoPlayInterval={3000}
      
      scrollAnimationDuration={1000}
      onSnapToItem={(index)=>{
        // console.log(index)
      }}
      renderItem={({item})=>(
        // console.log(item);
        
        <View style={{flex:1,borderWidth:0,justifyContent:'center' ,borderRadius:25 , overFlow:"hidden",marginTop:hp(-2)}}>
            {/* <ActivityIndicator/> */}
            <Image style={{width:"100%",height:"99%",borderRadius:hp(4),position:"relative"}} source={item}/>
            </View>

      )}
      
      />
       
    </View>
  )
}

export default ImageSlider