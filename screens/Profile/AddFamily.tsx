/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons, FONTS } from '../../constants';
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
import AppInput from '../../components/AppInput';
const Screen = ({ navigation }) => {
    const [status, setStatus] = useState('Male');
    const [visible, setVisible] = useState(false);
    const tablist = [
        { status: 'Male' },
        { status: 'Female' },
        { status: 'Other' },
    ];
    const data = [
        { key: '2', value: 'Father' },
        { key: '3', value: 'Mother' },
        { key: '5', value: 'Brother' },
        { key: '6', value: 'Sister' },
    ];
    const [selected, setSelected] = useState('Relationship');
    const setStatusFilter = (status) => {
        setStatus(status);
    }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Add Family" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{ marginTop: '10%' }}>
                        <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: FONTS.Black }}>Add Photo</Text>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 21, justifyContent: 'center', height: 126 }}>
                            <TouchableOpacity>
                                <View style={{ flex: 1, alignItems: 'center', borderWidth: 2, borderColor: 'black', padding: 30, marginRight: 20 }}>
                                    {/* <AntDesign name="upload" size={54} color="white" /> */}
                                    <Image source={icons.upload} style={{ width: 54, height: 54 }} />
                                    <Text style={{ color: COLORS.white, fontSize: 10, marginTop: 10, fontFamily: FONTS.Normal }}>Upload Image</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ flex: 1, alignItems: 'center', borderWidth: 2, borderColor: 'black', padding: 30 }}>
                                    {/* <AntDesign name="camerao" size={54} color="white" /> */}
                                    <Image source={icons.Camera} style={{ width: 54, height: 54 }} />
                                    <Text style={{ color: COLORS.white, fontSize: 10, marginTop: 10, fontFamily: FONTS.Normal }}>Open Camera</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ marginTop: 21 }}>
                        <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: FONTS.Black }}>Name</Text>
                        {/* <View style={styles.textBoxSign}>
                            <TextInput
                                placeholder="Ralph Edwards"
                                placeholderTextColor={'gray'}
                                //   onChangeText={(value) => setEmail(value)}
                                autoCapitalize={'none'}
                                style={{
                                    flex: 1,
                                    height: 40.5,
                                    fontSize: 12,
                                    marginLeft: 2,
                                    color: 'gray',
                                    margin: 10,

                                }}
                            />
                        </View> */}

                        <AppInput icon={null} defaultValue={"Ralph Edwards"} />

                    </View>
                    <View style={{ marginTop: 28 }}>
                        <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: FONTS.Black }}>Gender</Text>
                        <View style={styles.listTab}>
                            {
                                tablist.map((tab) => {
                                    return (
                                        <TouchableOpacity key={tab.status} style={[styles.btnTab, tab.status === status && styles.tnTabActive]}
                                            onPress={() => { setStatusFilter(tab.status); }}>
                                            <Text style={[styles.textTab, tab.status === status && styles.tnTabTextActive]}>{tab.status}</Text>
                                        </TouchableOpacity>)
                                })
                            }
                        </View>
                    </View>
                    <View style={{ marginTop: 36 }}>
                        <Text style={styles.titleTwo}>Date of Birth</Text>
                        <TouchableOpacity onPress={() => { setVisible(true); }}>
                            <View style={styles.textBoxSign}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    marginLeft: 16
                                }}>
                                    <Text style={{ fontSize: 14, color: 'gray' }}>1st , October 222</Text>
                                </View>
                                <View style={styles.icons}>
                                    <AntDesign name="calendar" size={20} color="black" />
                                </View>

                            </View>
                        </TouchableOpacity>
                        <View >
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                inputStyles={{ color: 'gray' }}
                                dropdownTextStyles={{ color: 'gray' }}
                                boxStyles={styles.dropdownBox}
                                save="value"
                                search={false}
                                searchPlaceholder={'Selected'}
                                arrowicon={<View >
                                    <Feather name="chevron-down" size={24} color="black" />
                                </View>
                                }
                            />
                        </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                        <View style={{ width: 318 }}>
                            <AppButton
                                onPress={() => { alert('Working') }}
                                text="Add"
                                textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                            />
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
                    <ModalLayout
                        onClose={() => {
                            setVisible(!visible);
                        }}
                    >
                        <View >
                            <View>
                                <Calendar
                                    // Collection of dates that have to be marked. Default = {}
                                    markedDates={{
                                        '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
                                        '2012-05-17': { marked: true },
                                        '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                                        '2012-05-19': { disabled: true, disableTouchEvent: true }
                                    }}
                                />
                            </View>
                        </View>
                    </ModalLayout>
                </Modal>
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

    listTab: {
        flexDirection: 'row',
        // marginBottom: 20,
        alignSelf: 'center',
        marginTop: 12
    },
    btnTab: {
        width: 115,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        marginLeft: 5,
        backgroundColor: 'white'

    },

    textTab: {
        fontSize: 14,
        color: 'black',
    },
    tnTabActive: {
        backgroundColor: COLORS.dark
    },
    tnTabTextActive: {
        color: COLORS.white
    },
    // listTab: {
    //     flexDirection: 'row',
    //     marginBottom: 20,
    //     alignSelf: 'center',
    // },
    // btnTab: {
    //     width: Dimensions.get('window').width / 3.5,
    //     flexDirection: 'row',
    //     borderWidth: 0.5,
    //     borderColor: '#E9EBEB',
    //     padding: 10,
    //     justifyContent: 'center',
    //     margin: 5,
    //     backgroundColor: COLORS.lightGray

    // },
    // textTab: {
    //     fontSize: 16,
    //     color: 'gray'
    // },
    // tnTabTextActive: {
    //     color: COLORS.white
    // },
    // tnTabActive: {
    //     backgroundColor: COLORS.dark
    // },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19
    },
    icons: {
        height: 40, justifyContent: 'center', alignItems: 'center', marginRight: 12
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: COLORS.white,
        marginBottom: 0,
        borderWidth: 0,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 50,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 20,
        marginBottom: 0,
        alignItems: 'center'
    },
})
export default Screen;
