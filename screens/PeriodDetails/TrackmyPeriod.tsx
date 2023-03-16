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
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Track my Period" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View>
                                <Text style={{ color: COLORS.dark, fontSize: 18, fontFamily: FONTS.Black }}>Period Started in</Text>
                            </View>
                            <View style={{ marginTop: '10%' }}>
                                <Text style={{ color: COLORS.dark, fontSize: 48, fontFamily: FONTS.Black }}>2 DAYS</Text>
                            </View>
                            <View style={{ marginTop: '10%' }}>
                                {/* <AppButton text='Log Period' style={{ backgroundColor: '#FFD4FF' }} textStyle={{ color: COLORS.black }} onPress={() => { alert('Working'); }} /> */}
                                <TouchableOpacity onPress={() => { alert('Ok') }} style={{
                                    backgroundColor: '#FFD4FF', paddingVertical: 11, paddingHorizontal: 43, borderRadius: 5,
                                }} >
                                    <Text style={{ fontFamily: FONTS.Black, fontSize: 12, color: COLORS.dark }}>Log Period</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: '10%' }}>
                                <TouchableOpacity onPress={() => { alert('Ok') }}>
                                    <Text style={{ color: '#B4B0B0', fontFamily: FONTS.Normal, fontSize: 10, textDecorationLine: 'underline' }}>Add note </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 20 }}>Cycle History</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('CycleHistory') }}>
                            <Text style={{ color: 'white', fontSize: 12, fontFamily: FONTS.Normal }}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={styles.cycleBox}>

                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 15, height: 72 }}>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Normal }}>31 Days</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ color: COLORS.gray, fontSize: 8 }}>27-Nov to 28-Dec </Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#7279B3', fontSize: 8, fontFamily: FONTS.Normal, textDecorationLine: 'underline' }}>See more </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.cycleBox}>
                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 15, height: 72 }}>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>


                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Normal }}>31 Days</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ color: COLORS.gray, fontSize: 8 }}>27-Nov to 28-Dec </Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#7279B3', fontSize: 8, fontFamily: FONTS.Normal, textDecorationLine: 'underline' }}>See more </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>


                        <View style={styles.cycleBox}>
                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: 15, height: 72 }}>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                                <View style={{ width: '30%' }}>
                                    <Image source={icons.redDrop} style={{ width: 10, height: 12 }} />
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Normal }}>31 Days</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ color: COLORS.gray, fontSize: 8 }}>27-Nov to 28-Dec </Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#7279B3', fontSize: 8, fontFamily: FONTS.Normal, textDecorationLine: 'underline' }}>See more </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>





                    </View>

                    <View style={{ marginTop: 30, marginBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.dark, fontSize: 19, fontWeight: 'bold' }}>Period History</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('PeriodHistory') }}>
                            <Text style={{ color: 'white', fontSize: 12, fontFamily: FONTS.Normal }}>See all</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <View style={{ flex: 1, marginRight: 4, backgroundColor: '#FFD4FF', padding: 5, borderRadius: 6 }}>
                            <Text style={{ fontSize: 16, fontFamily: FONTS.Black, color: COLORS.black }}>July</Text>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.dark, fontFamily: FONTS.Normal, fontSize: 12 }}>form</Text>
                                    <Text style={{ color: '#7279B3', fontFamily: FONTS.Normal, fontSize: 10 }}>20-July</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.dark, fontFamily: FONTS.Normal, fontSize: 12 }}>To</Text>
                                    <Text style={{ color: '#7279B3', fontFamily: FONTS.Normal, fontSize: 10 }}>25-July</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <Image source={icons.whiteNext} style={{ width: 17, height: 17 }} />

                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, marginRight: 4, backgroundColor: '#FFD4FF', padding: 5, borderRadius: 6 }}>
                            <Text style={{ fontSize: 16, fontFamily: FONTS.Black, color: COLORS.black }}>Aug</Text>
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.dark, fontFamily: FONTS.Normal, fontSize: 12 }}>form</Text>
                                    <Text style={{ color: '#7279B3', fontFamily: FONTS.Normal, fontSize: 10 }}>20-July</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: COLORS.dark, fontFamily: FONTS.Normal, fontSize: 12 }}>To</Text>
                                    <Text style={{ color: '#7279B3', fontFamily: FONTS.Normal, fontSize: 10 }}>25-July</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <Image source={icons.whiteNext} style={{ width: 17, height: 17 }} />

                                </View>
                            </View>
                        </View>


                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    cycleBox: {
        backgroundColor: '#FFFFFF', flex: 1, margin: 5,
        borderRadius: 20,
        // padding: 35,
        // alignItems: "center",
        // justifyContent:'center',
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        // justifyContent:'center',
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
})
export default Screen;
