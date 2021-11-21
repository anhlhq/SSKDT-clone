import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LitleProfile({ name }) {
    return (
        <View style={styles.profile}>
            <View style={styles.profileAvatar}>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.profileInfoWelcome}>Xin chào,</Text>
                <Text style={styles.profileInfoName}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        marginTop: 30,
        height: 50,
        paddingHorizontal: 10,
        flexDirection: "row"
    },
    profileAvatar: {
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        borderColor: 'blue',
        borderWidth: 0.5
    },
    profileInfo: {
        marginLeft: 5,
        justifyContent: 'center'
    },
    profileInfoWelcome: {
        fontSize: 16,
        fontWeight: '300'
    },
    profileInfoName: {
        fontSize: 16,
        fontWeight: '600'
    },
})

