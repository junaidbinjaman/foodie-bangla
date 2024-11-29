import React from 'react';
import {View, FlatList} from 'react-native';
import {CATEGORIES} from '../assets/data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {NativeStackScreenProps} from '@react-navigation/native-stack'; // Import NativeStackScreenProps

function CategoriesScreen({navigation}: {navigation: any}) {
    function renderCategoryItem({item}: {item: any}): React.ReactElement {
        function pressHandler() {
            navigation.navigate('MealsOverview');
        }

        return (
            <CategoryGridTile
                title={item.title}
                color={item.color}
                onPress={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
