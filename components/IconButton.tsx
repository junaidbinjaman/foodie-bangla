import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';

type IconButtonProps = {
    onPress: () => void;
    color: string,
    icon: ComponentProps<typeof Ionicons>['name'];
}

function IconButton({onPress, icon, color}: IconButtonProps) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})
