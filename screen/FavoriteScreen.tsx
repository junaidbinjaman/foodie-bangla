import {View, Text, StyleSheet} from 'react-native'
import React, { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { FavoriteContext } from '../store/context/favorites-context';
import { MEALS } from '../assets/data/dummy-data';

function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.Text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <MealsList items={favoriteMeals} />
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    }
})
