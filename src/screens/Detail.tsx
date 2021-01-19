import * as React from 'react';
import { StyleSheet, } from 'react-native';
import { View, Text } from '../components/Themed';

export default function DetailScreen()
{
    return (
        <View>
            <Text>Detail Screen</Text>
            <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
});
