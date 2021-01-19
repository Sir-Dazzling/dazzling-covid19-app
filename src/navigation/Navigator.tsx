import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ColorSchemeName, StyleSheet } from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName })
{

    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator<RootStackParamList>();

const screenOptionsStyle = {
    headerShown: false
};

function RootNavigator()
{
    return (
        <Stack.Navigator screenOptions={screenOptionsStyle}>
            <Stack.Screen
                name="Home"
                component={Home} />
            <Stack.Screen
                name="Detail"
                component={Detail} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

});