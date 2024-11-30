import React from 'react';
import {Text, View, Pressable, Image, StyleSheet, Platform} from 'react-native';

type MealItemProps = {
    title: string;
    imageUrl: string;
    duration: number;
    complexity: string;
    affordability: string;
};

function MealItem({
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}: MealItemProps) {
    return (
        <View style={styles.mealItem}>
            <View style={styles.innerContainer}>
                <Pressable
                    android_ripple={{color: '#ccc'}}
                    style={({pressed}) =>
                        pressed ? styles.buttonPressed : null
                    }
                >
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration} m</Text>
                        <Text style={styles.detailItem}>
                            {complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {affordability.toUpperCase()}
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

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
        opacity: 0.5
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