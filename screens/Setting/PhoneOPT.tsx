/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/SmallButton';
import { Divider } from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import ScreenHeader from '../../components/ScreenHader';
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} title={'Phone'} />
            <View style={styles.container}>
                <View>
                    <Text style={{ color: COLORS.dark, fontWeight: 'bold' }}>Add OPT here</Text>
                    <View style={{ justifyContent: 'center'}}>
                        <OTPInputView
                            style={{ width: '100%', height: 200 }}
                            pinCount={4}
                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                            // onCodeChanged = {code => { this.setState({code})}}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                            })}
                        />
                    </View>
                </View>
                <View style={{ marginTop: '3%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignContent: 'center' }}>
                    <Text style={{ color: '#ABB2B9', fontSize: 10 }}>Resend in 27:00</Text>
                    <AppButton
                        onPress={() => { navigation.push('Guidelines') }}
                        text="Verify"
                        style={{
                            width: '40%',
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2, padding: 5 }}
                    />
                </View>
                <View style={{ marginTop: '17%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.dark, fontSize: 12 }}>OTP has been sent to New  Phone Number</Text>
                </View>
            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 55,
    },
    title: {
        color: COLORS.dark,
        fontSize: 19
    },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
    borderStyleBase: {
        width: '15%',
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 50,
        height: 45,
        // borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: COLORS.dark,
        color: COLORS.dark
    },

    underlineStyleHighLighted: {
        borderColor: COLORS.red,
        color: COLORS.primary
    },
})
export default Screen;
