/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { RadioButton } from 'react-native-paper';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CreditCardDisplay from 'react-native-credit-card-display';
import Feather from 'react-native-vector-icons/Feather';
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';
import SuccessfullyModalLayout from '../../components/successfullyModalLayout';
// import AppButton from '../../components/AppButton';

const Screen = ({ navigation, onPress }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Thanks You" navigation={navigation} onlyBack={true} />

            <View style={styles.container}>
                <Image source={images.ThanksIcon} style={{ width: 200, height: 200 }} />
                <View style={{ margin: 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#F4B400', fontSize: 18, fontWeight: 'bold' }}>Thanks for the booking</Text>
                    <Text style={{ color: '#7279B3', fontSize: 16, }}>Luxe Bath House</Text>
                </View>
                <Text style={{ color: COLORS.dark, fontSize: 10 }}>You can reach at bath house</Text>
                <Text style={{ color: COLORS.dark, fontSize: 14 }}> on 1st, October, 2022 </Text>
                <Text style={{ color: COLORS.dark, fontSize: 14 }}>12:00 PM</Text>
                <AppButton
                    onPress={() => { alert('working') }}
                    text="Check My booking"
                    style={{
                        marginTop: '20%',
                        width: 247,
                    }}
                    textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                />
            </View>


        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default Screen;
