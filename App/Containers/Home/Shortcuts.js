import React from 'react'
import { View, StyleSheet } from 'react-native'
import HomeShortcutItem from 'Components/HomeShortcutItem'
export default function HomeShortcuts({ navigation }) {
    return (
        <View style={styles.shortcuts}>
            <HomeShortcutItem
                style={styles.shortcuts1}
                title="Khai báo y tế"
                onPress={() => navigation.navigate('MedicalDeclaration')} />
            <HomeShortcutItem
                style={styles.shortcuts2}
                title="Chứng nhận ngừa Covid"
                onPress={() => navigation.navigate('VaccinationInfomation')} />
            <HomeShortcutItem
                style={styles.shortcuts3}
                title="Tư vấn sức khỏe F0"
                onPress={() => navigation.navigate('VaccinationInfomation')} />
        </View>
    )
}

const styles = StyleSheet.create({
    shortcuts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    shortcuts1: {
        backgroundColor: '#47A9FB'
    },
    shortcuts2: {
        backgroundColor: '#69EDAA'
    },
    shortcuts3: {
        backgroundColor: '#FF8581'
    },
})