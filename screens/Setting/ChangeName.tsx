/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons, FONTS } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/AppButton';
import { Divider } from 'react-native-paper';
import ScreenHeader from '../../components/ScreenHader';
import AppInput from '../../components/AppInput';
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} title={'Name'} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Old Name</Text>
                    <AppInput defaultValue={"Emma Watson"} />

                    <Text style={{ ...styles.title, marginTop: 23 }}>New Name</Text>
                    <View>
                        <AppInput defaultValue={"First Name"} />
                        <AppInput defaultValue={"Middle Name"} />
                        <AppInput defaultValue={"Last Name"} />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <AppButton
                        onPress={() => { navigation.push('Status') }}
                        text="Change "
                        style={{
                            width: '100%',
                            marginTop: 60
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                    />
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
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: FONTS.Black
    },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19,
        marginTop: 20,
        marginBottom: 20,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 10,
        marginBottom: 10,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
})
export default Screen;
