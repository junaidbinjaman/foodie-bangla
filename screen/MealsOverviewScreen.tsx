import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../assets/data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route}: {route: any}) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData: {
        item: {
            title: string;
            imageUrl: string;
            duration: number;
            complexity: string;
            affordability: string;
        };
    }) {
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };
        return <MealItem {...mealItemProps} />;
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
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
