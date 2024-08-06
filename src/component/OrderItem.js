import { View, Text, StyleSheet, Image } from 'react-native'

import React from 'react'
import { useRoute } from '@react-navigation/native'
import FullCard from './FullCard.js'
const OrderItem = () => {
    const route = useRoute();
    const {id} = route.params;
  return (
    <View>
      <FullCard id={id}/>
    </View>
  )
}

export default OrderItem