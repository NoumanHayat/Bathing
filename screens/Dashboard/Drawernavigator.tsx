/* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
import React, { } from 'react';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';

import {
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';

import CustomDrawer from '../../components/CustomDrawer';
import { COLORS, icons } from '../../constants';
import tabNavigator from './tabNavigator';
import halacha from './../Halacha';
import QA from '../Q&A';

// import Testing from './testing';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
const Screen = ({ navigation }) => {
    return (
        <View>
            <Text style={{color:COLORS.dark}}>Ok</Text>
            <TouchableOpacity>
                <Text onPress={()=>{navigation.navigate('Settings')}}>Check</Text>
            </TouchableOpacity>
        </View>
    );
};
const AppStarting = ({ navigation }) => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                // drawerActiveBackgroundColor: COLORS.white,
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: COLORS.white,
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 14,
                },
                drawerStyle: {
                    width: Dimensions.get('window').width / 1.1,
                    backgroundColor: COLORS.dark,
                }
            }}>
            <Drawer.Screen
                name="Book an Bath House"
                component={tabNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.Book_an_Bath_House}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Appointments" 
                component={Screen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.Appointments}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Membership Packages
                "
                component={Screen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.Membership}
                        />
                        // <MaterialCommunityIcons name="message" size={24} color="white" />
                        // <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Subscriptions"
                component={Screen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.Subscriptions}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Halacha"
                component={halacha}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.Halacha}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Cycle History"
                component={Screen}
                options={{
                    drawerIcon: ({ color }) => (
                        // <Ionicons name="person-outline" size={22} color={color} />
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.CycleHistory}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Period History"
                component={Screen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.PeriodHistory}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Reminder"
                component={Screen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.Reminder}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="About Us"
                component={QA}
                options={{
                    drawerIcon: ({ color }) => (
                        <Image
                            style={{
                                width: 17,
                                height: 18,
                            }}
                            source={icons.AboutUs}
                        />
                        // <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};
export default AppStarting;