/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Book_an_Bath_House from '../Booking/Book_an_Bath_House';
import BookingHistoryDashboard from '../BookingHistory/Booking';
import PeriodDetails from '../PeriodDetails';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { GRADIENTS, COLORS, images, icons } from '../../constants';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:COLORS.dark}}>Home!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === 'BookingDashboard') {
            return <Feather name="inbox" size={24} color={!focused ? COLORS.gray : COLORS.white} />
          } else if (route.name === 'PeriodDetails') {
            return <Entypo name="drop" size={24} color={!focused ? COLORS.gray : COLORS.white} />
            // return <AntDesign name="calendar" size={24} color={!focused?COLORS.gray:COLORS.white} />;
          } else if (route.name === 'BookingHistoryDashboard') {
            return <AntDesign name="calendar" size={24} color={!focused ? COLORS.gray : COLORS.white} />;
          } else if (route.name === 'Notification') {
            return <Ionicons name="notifications" size={24} color={!focused ? COLORS.gray : COLORS.white} />;
          } else {
            return <Ionicons name="person" size={24} color={!focused ? COLORS.gray : COLORS.white} />;
          }
          // return <Ionicons name={iconName} size={24} color={COLORS.white} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },

      })}
      // tabBarOptions={{
      //     activeTintColor: 'black',
      //     inactiveTintColor:'black',
      //     showLabel: false,
      //   }}
      // tabBarActiveTintColor= "black",
      // "tabBarInactiveTintColor": "black",
      // "tabBarShowLabel": false,
      initialRouteName="BookingDashboard" >
      <Tab.Screen name="BookingDashboard" component={Book_an_Bath_House} />
      <Tab.Screen name="PeriodDetails" component={PeriodDetails} />
      <Tab.Screen name="BookingHistoryDashboard" component={BookingHistoryDashboard} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
