import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Animated, { FadeInUp, Layout } from 'react-native-reanimated';

const DietPlan = () => {
  const route = useRoute();
  const { plan } = route.params;

  const renderItem = ({ item, index }) => (
    <Animated.View 
      entering={FadeInUp.delay(index * 200)} // Delay based on the index
    //   layout={Layout.delay(index * 200)} // Layout animation delay
      style={styles.itemContainer}
    >
      <Text style={styles.recipe}>{item.Recipe}</Text>
      <Text style={styles.time}>Time: {item.Time}</Text>
      <Text style={styles.details}>Calories: {item.Calories}</Text>
      <Text style={styles.details}>Protein: {item.Protein}g</Text>
      <Text style={styles.details}>Carbohydrates: {item.Carbohydrates}g</Text>
      <Text style={styles.details}>Fats: {item.Fats}g</Text>
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      {item.Ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          - {ingredient}
        </Text>
      ))}
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={plan}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop:60,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  recipe: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 14,
    marginLeft: 10,
  },
});

export default DietPlan;
