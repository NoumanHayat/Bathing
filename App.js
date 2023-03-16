import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from './constants';
import SplashScreen from 'react-native-splash-screen';
import AfterLoadSplashScreen from './screens/AfterLoadSplashScreen/AfterLoadSplashScreen';
import {DataProvider} from './screens/hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {transparent} from 'react-native-paper/lib/typescript/styles/colors';
import SignUp from './screens/Account/SignUp';
import SignIn from './screens/Account/SignIn';
import Status from './screens/Account/Status';
import Location from './screens/Account/Location';
import Verification from './screens/Account/Verification';
import Guidelines from './screens/Account/Guidelines';

// import Dashboard from './screens/Dashboard';
import Drawernavigator from './screens/Dashboard/Drawernavigator';

import Book from './screens/Booking/Book';
import PaymentMethod from './screens/Booking/PaymentMethod';
import PaymentMethodCard from './screens/Booking/PaymentMethodCard';
import CheckOut from './screens/Booking/CheckOut';
import Recharge from './screens/Booking/Recharge';
import ThanksScreen from './screens/Booking/ThanksScreen';
import Chatnavigation from './screens/Chat';
import AddFamily from './screens/Profile/AddFamily';
import PersonalInformation from './screens/Profile/PersonalInformation';
// import QA from './screens/Q&A';
import ReminderSettings from './screens/Profile/ReminderSettings';
import Setting from './screens/Setting';

const Stack = createNativeStackNavigator();
const AppStarting = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const [getStarted, setGetStarted] = useState(false);

  return !getStarted ? (
    <AfterLoadSplashScreen onGetStarted={() => setGetStarted(true)} />
  ) : (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingBottom: 0,
      }}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor={COLORS.dark} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="SignUp">
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Status" component={Status} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="Guidelines" component={Guidelines} />
            <Stack.Screen
              name="DashboardNavigator"
              component={Drawernavigator}
            />

            <Stack.Screen name="Book" component={Book} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen
              name="PaymentMethodCard"
              component={PaymentMethodCard}
            />
            <Stack.Screen name="CheckOut" component={CheckOut} />
            <Stack.Screen name="Recharge" component={Recharge} />
            <Stack.Screen name="ThanksScreen" component={ThanksScreen} />
            <Stack.Screen name="Chatnavigation" component={Chatnavigation} />
            <Stack.Screen name="AddFamily" component={AddFamily} />
            <Stack.Screen
              name="PersonalInformation"
              component={PersonalInformation}
            />
            {/* <Stack.Screen name="QA" component={QA} /> */}
            {/* <Stack.Screen name="Halacha" component={halacha} /> */}
            <Stack.Screen
              name="ReminderSettings"
              component={ReminderSettings}
            />
            <Stack.Screen name="Setting" component={Setting} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
