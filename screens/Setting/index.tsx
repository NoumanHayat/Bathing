/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import settingDashboard from './settingDashboard';
import ProfilePicChange from './ProfilePicChange';
import ChangeName from './ChangeName';
import ChangeEmail from './ChangeEmail';
import ChangePhone from './ChangePhone';
import ChangePassword from './ChangePassword';
import NotificationSetting from './NotificationSetting';
import EmailOPT from './EmailOPT';
import PhoneOPT from './PhoneOPT';
import ChangeCycle from './ChangeCycle';
import ChangeCycleTime from './ChangeCycleTime';
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
                initialRouteName="SettingDashboard">
                <Stack.Screen name="SettingDashboard" component={settingDashboard} />
                <Stack.Screen name="ProfilePicChange" component={ProfilePicChange} />
                <Stack.Screen name="ChangeName" component={ChangeName} />
                <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
                <Stack.Screen name="ChangePhone" component={ChangePhone} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
                <Stack.Screen name="EmailOPT" component={EmailOPT} />
                <Stack.Screen name="PhoneOPT" component={PhoneOPT} />
                <Stack.Screen name="ChangeCycle" component={ChangeCycle} />
                <Stack.Screen name="ChangeCycleTime" component={ChangeCycleTime} />
            </Stack.Navigator>
        </View>
    )
};
export default AppStarting;


