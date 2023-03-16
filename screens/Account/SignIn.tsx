/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../../constants';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/AppButton';
import { Divider } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Screen = ({ navigation }) => {
    return (

        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            {/* <ScrollView style={{ flex: 1 }}> */}
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.viewLogo}>
                    <FastImage source={images.logo} style={styles.logo} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.hiText}>Welcome!</Text>
                    <Text style={styles.textTwo}>Login to your Account</Text>
                    <View style={styles.textBoxSign}>
                        {/* <Image
                        //   style={{marginLeft:5}}
                        source={icons.dropdown}
                        resizeMode="contain"
                        style={{ width: 26, height: 40, alignSelf: 'flex-start',margin:10 }}
                    /> */}
                        <View style={styles.icons}>
                            <Ionicons name="call-outline" size={24} color="black" />
                        </View>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='gray'
                            //   onChangeText={(value) => setEmail(value)}
                            autoCapitalize={'none'}
                            style={{
                                flex: 1,
                                height: 40.5,
                                fontSize: 12,
                                marginLeft: 2,
                                color: 'gray',
                                margin: 10
                            }}
                        />
                    </View>
                    <View style={styles.textBoxSign}>
                        <View style={styles.icons}>
                            <Feather name="lock" size={24} color="black" />
                            {/* <Feather name="mail" size={24} color="black" /> */}
                            {/* <Ionicons name="call-outline" size={24} color="black" /> */}
                        </View>
                        <TextInput
                            placeholder="************"
                            placeholderTextColor='gray'
                            //   onChangeText={(value) => setEmail(value)}
                            autoCapitalize={'none'}
                            secureTextEntry={true}
                            style={{
                                flex: 1,
                                height: 40.5,
                                fontSize: 12,
                                marginLeft: 2,
                                color: 'gray',
                                margin: 10
                            }}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <AppButton
                            onPress={() => { alert("Please") }}
                            text="Login"
                            style={{
                                width: '100%',
                                marginTop: 30
                            }}
                            textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { alert('working') }}>
                            <Text style={{ color: COLORS.dark, alignSelf: 'flex-end' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Divider style={{ height: 2, backgroundColor: 'black', borderRadius: 10, width: '40%' }} />
                        <Text style={{ color: 'black' }}>OR</Text>
                        <Divider style={{ height: 2, backgroundColor: 'black', borderRadius: 10, width: '40%' }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: COLORS.dark }}>Login with Social Media</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <FastImage
                                source={images.google}
                                //  tintColor={COLORS.dark}
                                style={{
                                    width: 19,
                                    height: 19,
                                    marginRight: 10,
                                }}
                            />
                            <FastImage
                                source={images.apple}
                                //  tintColor={COLORS.dark}
                                style={{
                                    width: 19,
                                    height: 20,
                                    marginLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                        <TouchableOpacity onPress={() => { navigation.push('SignUp') }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: COLORS.white }}>Don't have an account? </Text>
                                <Text style={{ fontSize: 14, color: COLORS.dark }}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient >

    );
};
const styles = StyleSheet.create({
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center'
    },
    logo: { width: 100, height: 100 },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16.5%',
        paddingBottom: '12%',
    },
    container: {
        margin: 55,
        marginTop: 0,
    },
    hiText: { fontSize: 32, color: COLORS.dark, fontWeight: 'bold' },
    textTwo: { fontSize: 20, color: 'gray', fontFamily: 'Mulish', marginTop: 13 },
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
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 60,
        flex: 1,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 20,
    },

})
export default Screen;
