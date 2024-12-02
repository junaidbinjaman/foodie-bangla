import React, {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../assets/data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

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

    return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;