import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type SubtitleProps = {
    children: React.ReactNode;
};

function Subtitle({children}: SubtitleProps) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        margin: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
