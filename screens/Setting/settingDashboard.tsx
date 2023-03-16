/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Setting" navigation={navigation} onlyBack={true} />
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


                    <View style={{ marginTop: 30 }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ChangeName') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Ionicons name="person" size={18} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change Name</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ChangeEmail') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {/* <Ionicons name="mail-outline" size={18} color="gray" /> */}
                                            <Image source={icons.settingMessage} style={{ width: 22, height: 18 }} />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change Email</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ChangePhone') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Feather name="phone" size={18} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Phone</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View> 
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ChangePassword') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Entypo name="lock" size={18} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change Password</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ChangeCycle') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <MaterialCommunityIcons name="recycle-variant" size={18} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change Period Cycle & Period Lenght</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ChangeEmail') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {/* <Ionicons name="mail-outline" size={18} color="gray" /> */}
                                            <Image source={icons.information} style={{ width: 22, height: 18 }} />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Personal Information</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={() => { navigation.navigate('NotificationSetting') }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name="notifications-outline" size={18} color="black" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Notification</Text>
                                        </View>
                                        <View >
                                            <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient >
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    // modalView: {
    //     width: "100%",
    //     margin: 10,
    //     backgroundColor: "white",
    //     borderRadius: 7,
    //     padding: 15,
    //     // alignItems: "center",
    //     // shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5
    // },
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 4,
    //     marginBottom: 4,
    // },
    modalView: {
        width: "100%",
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: "white",
        borderRadius: 7,
        padding: 15,
        height: 49,
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 4,
        marginBottom: 20,
    },
})
export default Screen;
