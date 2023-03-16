/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, icons, FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { Divider } from 'react-native-paper';
import { Divider } from 'react-native-elements';
const CustomCard = () => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{ fontSize: 14, color: '#7279B3', padding: 10, fontFamily: FONTS.Normal }}>January</Text>
                <LinearGradient
                    style={{ flex: 1 }}
                    useAngle={true}
                    angle={180}
                    colors={GRADIENTS.backgroundColor}>
                    <View style={styles.cardStyle}>
                        <View style={styles.vertical}>
                            <View style={{}}>
                                <Text style={{ color: COLORS.white, fontSize: 14, fontFamily: FONTS.Normal }}>Dates</Text>
                                <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Black,marginTop:6 }}>20-Jan to 25-Feb</Text>

                                <Text style={{ color: COLORS.white, fontSize: 14, fontFamily:FONTS.Black, marginTop: 20 }}>Current Cycle</Text>
                                <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily:FONTS.Black, marginTop: 9 }}>30 Days</Text>
                            </View>
                            <Divider style={{
                                marginBottom: 33,
                                marginTop: 33,
                                marginLeft: 22,
                                marginRight: 22,
                            }} orientation="vertical" insetType='middle' color='white' width={2} />

                            <View style={{ justifyContent: 'space-evenly',width:150}}>
                                <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.redDrop} style={{ width: 10, height: 13 }} />
                                        <Text style={{ color: COLORS.white,fontSize:14,fontFamily:FONTS.Normal }}>Period</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: COLORS.dark,fontSize:14,fontFamily:FONTS.Black  }}>5 DAYS</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row',justifyContent:'space-between'  }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.greenDrop} style={{ width: 10, height: 13 }} />
                                        <Text style={{ color: COLORS.white,fontSize:14,fontFamily:FONTS.Normal }}>Fertile</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: COLORS.dark,fontSize:14,fontFamily:FONTS.Black  }}>11 DAYS</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={icons.yellowDrop} style={{ width: 10, height: 13 }} />
                                        <Text style={{ color: COLORS.white,fontSize:14,fontFamily:FONTS.Normal }}>Ovalution</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: COLORS.dark,fontSize:14,fontFamily:FONTS.Black }}>20-jan</Text>
                                    </View>

                                </View>
                            </View>

                        </View>

                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Cycle History" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={{ color: COLORS.dark, fontSize: 24, fontWeight: 'bold' }}>2022</Text>
                    </View>
                    <View>
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    cardStyle: {
        paddingLeft: 10,
        paddingRight: 14,
        paddingTop: 20,
        flexDirection: 'row',
        flex: 1
    },
    vertical: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    modalView: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 2,
        // padding: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 202
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
})
export default Screen;
