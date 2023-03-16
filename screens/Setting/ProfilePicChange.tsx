/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons,FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ModalLayout from '../../components/ModalLayout';
import { SelectList } from 'react-native-dropdown-select-list';
import AppButton from '../../components/AppButton';
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Profile Pic Change" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={images.Person} style={{ width: 64, height: 64, borderRadius: 15 }} />
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('ProfilePicChange') }}>
                            <View style={{ left: -15, backgroundColor: 'white', padding: 6, borderRadius: 360, bottom: 5 }}>
                                {/* <Feather name="edit" size={24} color="black" /> */}
                                <Image source={icons.pen} style={{ width: 11, height: 11 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, marginTop: 21, height: 126,justifyContent:'space-between' }}>
                            <TouchableOpacity>
                                <View style={{ flex: 1, alignItems: 'center', borderWidth: 2, borderColor: 'black', padding: 30,width:160,borderRadius:10}}>
                                    {/* <AntDesign name="upload" size={54} color="white" /> */}
                                    <Image source={icons.upload} style={{ width: 54, height: 54 }} />
                                    <Text style={{ color: COLORS.white, fontSize: 10, marginTop: 10, fontFamily: FONTS.Normal }}>Upload Image</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ flex: 1, alignItems: 'center', borderWidth: 2, borderColor: 'black', padding: 30,width:160,borderRadius:10 }}>
                                    {/* <AntDesign name="camerao" size={54} color="white" /> */}
                                    <Image source={icons.Camera} style={{ width: 54, height: 54 }} />
                                    <Text style={{ color: COLORS.white, fontSize: 10, marginTop: 10, fontFamily: FONTS.Normal }}>Open Camera</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    <View style={{ marginTop: 56 }}>
                        <AppButton
                            onPress={() => { alert('Update') }}
                            text="Update"
                            textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                        />
                    </View>
                </View>

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
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
})
export default Screen;
