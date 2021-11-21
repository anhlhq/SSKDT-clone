import React from 'react'
import { View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { LitteProfile, Shortcuts, Content } from 'Containers/Home'
export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <LitteProfile name={'Lê Huy Quang Anh'} />
            <Shortcuts navigation={navigation} />
            <Content />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: "100%",
    }
})