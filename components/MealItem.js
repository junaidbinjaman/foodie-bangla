import React from 'react';
import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealItem = ({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) => {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <View>
                <Pressable
                    android_ripple={{color: '#cccccc'}}
                    style={({pressed}) =>
                        pressed ? styles.buttonPressed : null
                    }
                    onPress={selectMealItemHandler}
                >
                    <View style={styles.innerContainer}>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.select({ios: 'visible', android: 'hidden'}),
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },

    buttonPressed: {
        opacity: 0.5,
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
