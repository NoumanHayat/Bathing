/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { RadioButton } from 'react-native-paper';
import { Divider } from 'react-native-paper';

import AppButton from '../../components/AppButton';


const Screen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const { width, height } = Dimensions.get('window');
    const [checked, setChecked] = React.useState('first');

    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Payment Method" navigation={navigation} onlyBack={true} />
            {/* <ScrollView> */}
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.dark }}>Select Your Payment Method</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.smallContainer}>
                            <Text style={{ fontSize: 12, color: COLORS.dark }}>Add new Debit/Credit Card</Text>
                        </View>
                        <View>
                            <View style={styles.paymentItemContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Image style={{ width: 34, height: 34, }} source={{ uri: 'https://pics.freeicons.io/uploads/icons/png/1259953031579517867-512.png' }} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 13 }}>Paypal</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0 }}>
                                    <RadioButton
                                        color='black'
                                        value="paypal"
                                        status={checked === 'paypal' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('paypal')}
                                    />
                                </View>
                            </View>
                            <View style={styles.paymentItemContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Image style={{ width: 34, height: 34, }} source={{ uri: 'https://africa.visa.com/dam/VCOM/regional/cemea/genericafrica/global-elements/cards/classic.jpg' }} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 13 }}>Credit Card</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0 }}>
                                    <RadioButton
                                        value="Credit Card"
                                        color={'black'}
                                        status={checked === 'Credit Card' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Credit Card')}
                                    />
                                </View>
                            </View>
                            <View style={styles.paymentItemContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Image style={{ width: 34, height: 34, }} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/major-credit-cards-colored/48/JD-01-512.png' }} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 13 }}>Debit Card</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0 }}>
                                    <RadioButton
                                        value="Debit Card"
                                        color='black'
                                        status={checked === 'Debit Card' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Debit Card')}
                                    />
                                </View>
                            </View>
                            <View style={styles.paymentItemContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Image style={{ width: 34, height: 34, }} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/inficons/512/apple.png' }} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 13 }}>Apple Pay</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0 }}>
                                    <RadioButton
                                        color='black'
                                        value="Apple Pay"
                                        status={checked === 'Apple Pay' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Apple Pay')}
                                    />
                                </View>
                            </View>
                            <View style={styles.paymentItemContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Image style={{ width: 34, height: 34, }} source={{ uri: 'https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/current-google-play-icon.jpg' }} />
                                    <View style={{ marginLeft: 15 }}>
                                        <Text style={{ color: COLORS.dark, fontSize: 13 }}>Google Pay</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0 }}>
                                    <RadioButton
                                        color='black'
                                        value="Google Pay"
                                        status={checked === 'Google Pay' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('Google Pay')}
                                    />
                                </View>
                            </View>
                            <Divider style={{ height: 2, backgroundColor: 'black', borderRadius: 10, width: '100%' }} />

                            <View style={{ marginTop: 20, }}>
                                <Text style={{ color: COLORS.dark }}>Webmoney</Text>
                                <View style={{ ...styles.paymentItemContainer, marginTop: 4, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <Image style={{ width: 34, height: 34, }} source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/30/17/10/web-1873373_1280.png' }} />
                                        <View style={{ marginLeft: 15 }}>
                                            <Text style={{ color: COLORS.dark, fontSize: 13 }}>Webmoney</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0 }}>
                                        <RadioButton
                                            color='black'
                                            value="Webmoney"
                                            status={checked === 'Webmoney' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('Webmoney')}
                                        />
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.2,marginHorizontal: 25, }} >
                    <AppButton
                        onPress={() => { navigation.navigate('PaymentMethodCard') }}
                        text="Add"
                        style={{
                            width: '100%',
                            marginTop: 30
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                    />
                </View>
            {/* </ScrollView> */}
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    paymentItemContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    bodyContainer: {},
    smallContainer: {
        marginBottom: 15,
        marginTop: 15,
    },
    title: {
        marginBottom: 15,
        marginTop: 15,
    },
    container: {
        margin: 25,
        // backgroundColor: 'red',
        flex: 1,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
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
        width: Dimensions.get('window').width / 1.8,
    },
    topContainer: {
        flexDirection: 'row',
        flex: 1,
        // eslint-disable-next-line no-undef
        width: "auto",
    },
    mainImage: {
        flex: 1,
    }, mainTextArea: {
        flex: 0.6,
        padding: 5
    }
})
export default Screen;
