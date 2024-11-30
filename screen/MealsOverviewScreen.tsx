import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MEALS, CATEGORIES} from '../assets/data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route, navigation}: any) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const categoryTitle = CATEGORIES.find(
        (category) => category.id === catId
    )?.title;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    function renderMealItem(itemData: {
        item: {
            id: string | number;
            title: string;
            imageUrl: string;
            duration: number;
            complexity: string;
            affordability: string;
        };
    }) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
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
