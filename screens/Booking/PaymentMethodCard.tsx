/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ImageBackground, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { RadioButton } from 'react-native-paper';
import { Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppInput from '../../components/AppInput';

const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Payment Method" navigation={navigation} onlyBack={true} />
            <View style={styles.container}>

                <View style={styles.bodyContainer}>


                    <View>
                        <Image source={images.Card} style={{ width: '100%', height: 195, resizeMode: 'stretch', }} />
                    </View>
                    <KeyboardAwareScrollView>
                        <View style={{ marginTop: 30 }}>
                            <AppInput icon={null} defaultValue={"Full Name"} />
                            <AppInput icon={null} defaultValue={"Card Number"} />



                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <View style={{ marginRight: 5, ...styles.textBoxSignSmall, flex: 0.7 }}>
                                    <TextInput
                                        placeholder="CVV"
                                        placeholderTextColor={'gray'}
                                        //   onChangeText={(value) => setEmail(value)}
                                        autoCapitalize={'none'}
                                        style={{
                                            flex: 1,
                                            height: 'auto',
                                            fontSize: 10,
                                            // marginLeft: 2,
                                            color: 'gray',
                                            paddingBottom: 7,
                                            textAlign: 'center'
                                        }}
                                    />
                                </View>
                                <View style={{ marginLeft: 5, ...styles.textBoxSignSmall, flex: 1, }}>
                                    <TextInput
                                        placeholder="Expireed Date"
                                        placeholderTextColor={'gray'}
                                        //   onChangeText={(value) => setEmail(value)}
                                        autoCapitalize={'none'}
                                        style={{
                                            flex: 1,
                                            height: 'auto',
                                            fontSize: 10,
                                            marginLeft: 35,
                                            color: 'gray',
                                            paddingBottom: 7,
                                            // textAlign: 'center'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
                <View style={styles.button}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <AppButton
                            onPress={() => { navigation.navigate('CheckOut') }}
                            text="Save"
                            style={{
                                width: '100%',
                                // marginTop: 30
                            }}
                            textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 0,
      
    },
    button: {
        flex: 0.1,

    },
    bodyContainer: {
        flex: 1,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 20,
        marginBottom: 0,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center'
    },
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 50,
        flex: 1,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 20,
    },
})
export default Screen;
