import React from 'react';
import { MEALS } from '../data/dummy-data';
import { View, Text, StyleSheet } from 'react-native';

const MealsOverviewScreen = () => {
    return (
       <View style={styles.container}>
            <Text>Meal overview screen..</Text>
       </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});