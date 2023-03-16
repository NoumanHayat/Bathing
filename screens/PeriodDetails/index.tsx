/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import LastPreiodStarted from './LastPreiodStarted';
import HowlongisyourCycle from './HowlongisyourCycle';
import AveragePeriod from './AveragePeriod';
import BirthControl from './BirthControl';
import LastPeriod from './LastPeriod';
import Reminder from './Reminder';
import PeriodDashboard from './PeriodDashboard';
import TrackmyPeriod from './TrackmyPeriod';
import CycleHistory from './CycleHistory';

import PeriodHistory from './PeriodHistory';
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
                initialRouteName="LastPreiodStarted">

                <Stack.Screen name="LastPreiodStarted" component={LastPreiodStarted} />
                <Stack.Screen name="HowlongisyourCycle" component={HowlongisyourCycle} />
                <Stack.Screen name="AveragePeriod" component={AveragePeriod} />
                <Stack.Screen name="BirthControl" component={BirthControl} />
                <Stack.Screen name="LastPeriod" component={LastPeriod} />
                <Stack.Screen name="Reminder" component={Reminder} />
                <Stack.Screen name="PeriodDashboard" component={PeriodDashboard} />
                <Stack.Screen name="TrackmyPeriod" component={TrackmyPeriod} />
                <Stack.Screen name="CycleHistory" component={CycleHistory} />
                <Stack.Screen name="PeriodHistory" component={PeriodHistory} />
            </Stack.Navigator>
        </View>
    )
};
export default AppStarting;


