/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import ChatDashboard from './ChatDashboard';
import ChatBot from './ChatBot';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Screen = ({ navigation }) => {
    return (
        <View>
            <Text style={{color:COLORS.dark}}>Ok</Text>
            <TouchableOpacity>
                <Text
                    onPress={() => {
                        alert('Ok');
                    }}>
                    Check
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const AppStarting = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="ChatDashboard">
                <Stack.Screen name="ChatDashboard" component={ChatDashboard} />
                <Stack.Screen name="ChatBot" component={ChatBot} />
            </Stack.Navigator>
        </View>
    )
};
export default AppStarting;


