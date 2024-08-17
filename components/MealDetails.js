import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MealDetails = ({duration, complexity, affordability}) => {
    return (
        <View>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
