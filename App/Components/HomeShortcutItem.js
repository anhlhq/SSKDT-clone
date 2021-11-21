import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HomeShortcutItem({ title, onPress, style }) {
    return (
        <TouchableOpacity style={[style, styles.shortcutCommom]} onPress={onPress}>
            <View style={styles.shortcutIcon}>
            </View>
            <Text style={styles.shortcutTitle}>
                {title}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    shortcutCommom: {
        width: 110,
        height: 135,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shortcutIcon: {
        height: 45,
        width: 45,
        backgroundColor: '#ffffff',
        borderRadius: 50,
    },
    shortcutTitle: {
        marginTop: 10,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
