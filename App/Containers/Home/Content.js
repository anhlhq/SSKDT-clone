import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Content() {
    return (
        <View style={styles.content}>

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        height: 400,
        backgroundColor: "#EDF1F8",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }
})