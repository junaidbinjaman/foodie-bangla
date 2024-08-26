import React from 'react';
import {MEALS} from '../data/dummy-data';
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route}) => {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return (
            <MealItem {...mealItemProps} />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
