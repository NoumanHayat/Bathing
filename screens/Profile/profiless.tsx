/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons, FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Profile" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <View>
                            <Image source={images.Person} style={{ width: 64, height: 64, borderRadius: 15 }} />
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ color: COLORS.dark, fontSize: 24, fontFamily:FONTS.Black}}>Emma Watson</Text>
                            <TouchableOpacity onPress={()=>{navigation.navigate('PersonalInformation')}}>
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Feather name="edit" size={12} color="white" />
                                    <Text style={{color:COLORS.white,fontSize:12}}>Edit Profile</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: COLORS.white,fontSize:12 }}>Family Members</Text>
                    </View>
                    {/* <View style={{ marginTop: '4%' }}> */}
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginTop: 11 }}>
                        <View style={{ alignItems: 'center', marginRight: '5%' }}>
                            <Image source={images.Person} style={{ width: 41, height: 41, borderRadius: 360 }} />
                            <Text style={{ color: COLORS.dark, fontSize: 6,fontFamily:FONTS.Normal }}>Ralph Edwards</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginRight: '5%' }}>
                            <Image source={images.Person} style={{ width: 41, height: 41, borderRadius: 360 }} />
                            <Text style={{ color: COLORS.dark, fontSize: 6,fontFamily:FONTS.Normal }}>Ralph Edwards</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{navigation.navigate('AddFamily')}}>
                            <View style={{ alignItems: 'center', marginRight: '5%' }}>
                                <Ionicons name="add-circle-sharp" size={41} color="black" />
                                <Text style={{ color: COLORS.dark, fontSize: 6,fontFamily:FONTS.Normal }}>Add New</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 38 }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            <Ionicons name="person" size={24} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 5 }}>My Account</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Image source={icons.right_arrow} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            {/* <MaterialCommunityIcons name="account-lock-open-outline" size={24} color="black" /> */}
                                            <MaterialIcons name="lock-clock" size={24} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 5 }}>Personal Information</Text>

                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Image source={icons.right_arrow} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            <MaterialCommunityIcons name="monitor-eye" size={24} color="gray" />
                                            <Image source={icons.trackmyperiod} style={{ width:18, height: 18}} />
                                            <Text style={{ color: COLORS.black, marginLeft: 5 }}>Track my Period</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Image source={icons.right_arrow} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View> */}
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={()=>{navigation.navigate('ReminderSettings')}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            {/* <Ionicons name="person" size={24} color="gray" /> */}
                                            <Ionicons name="alarm-outline" size={24} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 5 }}>Reminder</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Image source={icons.right_arrow} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            <MaterialCommunityIcons name="bathtub" size={24} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 5 }}>My Bathhouse Booking</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Image source={icons.right_arrow} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            {/* <Ionicons name="person" size={24} color="gray" /> */}
                                            <AntDesign name="setting" size={24} color="gray" />
                                            <Text style={{ color: COLORS.gray, marginLeft: 5 }}>Setting</Text>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                            <Image source={icons.right_arrow} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
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
    modalView: {
        width: "100%",
        margin: 10,
        backgroundColor: "white",
        borderRadius: 7,
        padding: 15,
        height:49,
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
        // marginBottom: 4,
    },
})
export default Screen;
