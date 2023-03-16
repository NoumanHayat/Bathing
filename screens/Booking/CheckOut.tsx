/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
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
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Checkout" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                {/* <ScrollView> */}
                <View style={styles.container}>
                    <View style={styles.bodyContainer}>
                        <View>
                            <Image source={images.BathHouse_main} style={{ width: '100%', height: 181, resizeMode: 'stretch', }} />
                        </View>
                        <View style={{ marginTop: 11 }}>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 16 }}>Luxe Bath House</Text>
                            <Text style={{ color: COLORS.gray,fontSize:10 }}>Axis bath house house is the best  bath near your home.</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 13, marginTop: 18, fontWeight: 'bold' }}>Booked Date & Time</Text>
                            <View style={{ flexDirection: 'row', marginTop: 13,alignItems:'center' }}>
                                <AntDesign name="calendar" size={9} color="white" />
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 10, marginLeft: 3 }}>01st, October, 2022</Text>
                                <EvilIcons style={{ marginLeft: '10%' }} name="clock" size={13} color="white" />
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 10, marginLeft: 3 }}>12:00 PM</Text>

                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 30 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.gray,fontSize:12 }}>Price</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ color: COLORS.gray,fontSize:12 }}>USD 100</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 19 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.gray,fontSize:12 }}>Vat</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ color: COLORS.gray,fontSize:12 }}>USD 10</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 24 }}>
                                <Divider style={{ height: 2, backgroundColor: 'black', borderRadius: 10, width: '90%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, marginTop: 7 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 14, fontWeight: 'bold' }}>Total</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 14, fontWeight: 'bold' }}>USD 110</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 30 }}>
                                <Text style={{ color: COLORS.dark, fontWeight: 'bold',fontSize:13 }}>My wallet</Text>
                                <Image source={images.Card} style={{ width: '100%', height: 195, resizeMode: 'stretch', marginTop: 10 }} />
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={()=>{navigation.navigate('Recharge')}}>
                                        <Text style={{ color: COLORS.red }}>Your wallet balance is low.<Text style={{color:COLORS.white}}>Please recharge</Text> </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <AppButton
                                onPress={() => { navigation.navigate('ThanksScreen') }}
                                text="Checkout"
                                style={{
                                    width: '100%',
                                    marginTop: 28
                                }}
                                textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                            />
                        </View>
                    </View>
                </View>
                {/* </ScrollView> */}
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    button: {
        flex: 0.15,
    },
    bodyContainer: {
        flex: 0.8,
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
