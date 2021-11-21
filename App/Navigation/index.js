import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen, MedicalDeclaration, VaccinationInfomation } from 'Screens'
const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>

                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                    <Stack.Screen
                        name="MedicalDeclaration"
                        component={MedicalDeclaration}
                    />
                    <Stack.Screen
                        name="VaccinationInfomation"
                        component={VaccinationInfomation}
                    />

                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}
