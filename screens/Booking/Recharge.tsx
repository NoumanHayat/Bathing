/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, FONTS } from '../../constants';
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
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = useState(100);
    const CustomButtons = ({ title = '', onPress, style = {} }) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={{ margin: 2, backgroundColor: 'rgba(180, 176, 176, 0.2)', padding: 10, paddingLeft: 5, paddingRight: 5, borderRadius: 10, ...style }}>
                    <Text style={{ color: COLORS.dark, fontSize: 14 }}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const CustomButtonsPrevious = ({ title = '', onPress, style = {}, selected = false }) => {
        return selected ? (
            <TouchableOpacity onPress={onPress}>
                <View style={{ margin: 2, backgroundColor: '#3D2645', width: 55, height: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 2, ...style }}>
                    <Text style={{ color: COLORS.white, fontSize: 10, fontFamily: FONTS.Black }}>{title}</Text>
                </View>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={onPress}>
                <View style={{ margin: 2, backgroundColor: 'rgba(180, 176, 176, 0.2)', width: 55, height: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 2, ...style }}>
                    <Text style={{ color: COLORS.dark, fontSize: 10, fontFamily: FONTS.Black }}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Recharge" navigation={navigation} onlyBack={true} />

            <View style={styles.container}>

                <View>
                    <View style={{}} >
                        <TouchableOpacity>
                            <View style={styles.textBoxSign}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    margin: 11,

                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={images.Card} style={{ width: 90, height: 48 }} />
                                        <Text style={{ fontSize: 10, color: '#95B0B1', marginLeft: 10, fontFamily: FONTS.Normal }}>My wallet</Text>
                                    </View>
                                </View>
                                <View style={styles.icons}>
                                    <Text style={{ color: COLORS.dark, fontFamily: FONTS.Normal, fontSize: 12 }}>110 USD</Text>
                                    <Feather name="chevron-down" size={24} color="black" />
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ paddingTop: 20, paddingLeft: 47 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: FONTS.Normal }}>Amount</Text>
                            </View>
                            <View style={{ marginTop: 48, marginLeft: 53, marginRight: 74, paddingBottom: 28 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <CustomButtons style={{ padding: 10, paddingLeft: 15, paddingRight: 15, }} title='-' onPress={() => { return setValue((value - 1) >= 0 ? value - 1 : value); }} />

                                    <Text style={{ color: COLORS.dark, fontSize: 28, fontWeight: 'bold' }}>USD {value}</Text>
                                    <CustomButtons style={{ padding: 10, paddingLeft: 15, paddingRight: 15, }} title='+' onPress={() => { return setValue((value + 1) <= 200 ? value + 1 : value); }} />

                                </View>

                                <View>
                                    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginTop: 43 }}>
                                        <Slider
                                            value={value}
                                            onValueChange={setValue}
                                            maximumValue={250}
                                            minimumValue={0}
                                            step={1}
                                            trackStyle={{ height: 3, backgroundColor: 'transparent' }}
                                            thumbStyle={{ height: 10, width: 20, backgroundColor: 'transparent' }}
                                            thumbProps={{
                                                children: (
                                                    <AntDesign name="circledown" size={10} color="black" />
                                                ),
                                            }}
                                        />
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                                    <CustomButtonsPrevious title='USD 20' onPress={() => { return setValue(20); }} />
                                    <CustomButtonsPrevious title='USD 30' onPress={() => { return setValue(30); }} />

                                    <CustomButtonsPrevious title='USD 40' onPress={() => { return setValue(40); }} />

                                    <CustomButtonsPrevious title='USD 50' onPress={() => { return setValue(50); }} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                                    <CustomButtonsPrevious title='USD 60' onPress={() => { return setValue(20); }} />
                                    <CustomButtonsPrevious title='USD 70' onPress={() => { return setValue(30); }} />

                                    <CustomButtonsPrevious title='USD 80' onPress={() => { return setValue(40); }} />

                                    <CustomButtonsPrevious title='USD 100' selected={true} onPress={() => { return setValue(50); }} />
                                </View>
                                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <CustomButtons title='USD 60' onPress={() => { return setValue(60); }} />
                                    <CustomButtons title='USD 70' onPress={() => { return setValue(70); }} />

                                    <CustomButtons title='USD 80' onPress={() => { return setValue(80); }} />

                                    <CustomButtons title='USD 100' onPress={() => { return setValue(100); }} />
                                </View> */}
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 28 }}>
                        <AppButton text={'Cancel'} style={{ marginLeft: 5, justifyContent: 'center', backgroundColor: null, borderColor: 'black', borderWidth: 2 }} textStyle={{ color: COLORS.dark, paddingLeft: '10%', paddingRight: '10%' }} onPress={() => { alert('Ok') }} />
                        <AppButton text={'Add Amount'} style={{ marginLeft: 5, justifyContent: 'center' }} onPress={() => { setVisible(true); }} />
                    </View>
                </View>
            </View>
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <SuccessfullyModalLayout
                    onClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <View style={{}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={images.SuccessIcon} style={{ width: 250, height: 250 }} />
                            <Text style={{ color: COLORS.dark }}>Thank you</Text>
                            <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 23 }}>Wallet successfully recharched</Text>

                        </View>
                        <View style={{ marginTop: '10%' }}>
                            <AppButton text={'Back to checkout'} style={{ marginLeft: 5, justifyContent: 'center' }} onPress={() => { setVisible(false); }} />
                        </View>

                    </View>
                </SuccessfullyModalLayout>
            </Modal>
        </LinearGradient >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    button: {

    },
    bodyContainer: {
    },

    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto', alignSelf: 'center', justifyContent: 'center', marginRight: 23,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 70,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
        justifyContent: 'center', alignItems: 'center'
    },
    modalView: {
        width: "100%",
        margin: 0,

        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        height: 353,
        // padding: 35,
        // alignItems: "center",
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 21,
    },
})
export default Screen;
