import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

function MealsList({items}: any) {
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
                data={items}
                renderItem={renderMealItem}
                
            />
        </View>
    );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

