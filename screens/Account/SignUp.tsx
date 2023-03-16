/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollViewComponent, ScrollView } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons,FONTS } from '../../constants';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/AppButton';
import { Divider } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppInput from '../../components/AppInput';

const Screen = ({ navigation }) => {
    return (

        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <View style={styles.viewLogo}>
                    <FastImage source={images.logo} style={styles.logo} />
                    <Text style={{color:'#3D2645',fontSize:12}}>Mikvah</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.hiText}>Hi!</Text>
                    <Text style={styles.textTwo}>Create your account</Text>
                    <AppInput icon={<Ionicons name="call-outline" size={15} color="black" />} defaultValue={"Email"} />
                    <AppInput icon={<Feather name="mail" size={15} color="black" />} defaultValue={"Phone"} />
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ marginRight: 5, ...styles.textBoxSignSmall }}>
                            <TextInput
                                placeholder="First name"
                                placeholderTextColor='gray'
                                autoCapitalize={'none'}
                                style={{
                                    flex: 1,
                                    height: 'auto',
                                    fontSize: 12,
                                    marginLeft: 20,
                                    color: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // margin: 10
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: 5, ...styles.textBoxSignSmall }}>
                            <TextInput
                                placeholder="Last name"
                                placeholderTextColor='gray'
                                autoCapitalize={'none'}
                                style={{
                                    flex: 1,
                                    height: 'auto',
                                    fontSize: 12,
                                    marginLeft: 20,
                                    color: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // backgroundColor:'red',
                                    // margin: 10
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <AppButton
                            onPress={() => { navigation.push('Status') }}
                            text="Sign Up"
                            style={{
                                width: '100%',
                                marginTop: 30,
                            }}
                            textStyle={{ color: COLORS.white, letterSpacing: 2,fontFamily:'Mulish-Black',fontSize:20 }}
                        />
                    </View>
                    <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Divider style={{ height: 2, backgroundColor: 'black', borderRadius: 10, width: '40%' }} />
                        <Text style={{ color: 'black' }}>OR</Text>
                        <Divider style={{ height: 2, backgroundColor: 'black', borderRadius: 10, width: '40%' }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ color: COLORS.dark }}>Sign Up with Social Media</Text>
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
                        <TouchableOpacity onPress={() => { navigation.push('SignIn'); }}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{ color: COLORS.white }}>Already have an account? </Text>
                                <Text style={{ fontSize: 14, color: COLORS.dark }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView >
        </LinearGradient >

    );
};
const styles = StyleSheet.create({
    icons: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center', margin: 10
    },
    logo: { width: 77, height: 77 ,resizeMode:'contain'},
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
    hiText: { fontSize: 32, color: COLORS.dark,fontFamily:FONTS.Black },
    textTwo: { fontSize: 20, color: 'gray', fontFamily: 'Mulish', marginTop: 13 },
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 50,
        flex: 1,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 20,
    },

})
export default Screen;
