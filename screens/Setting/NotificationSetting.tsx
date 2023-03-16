/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons } from '../../constants';
import ScreenHeader from '../../components/ScreenHaderDashboard';
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
import { RadioButton } from 'react-native-paper';
import Switch from '../../components/Switch';
const Screen = ({ navigation }) => {
    const [check, setChecked] = useState(false);
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} onlyBack={true} title={'Notification'} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Before Period Start</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Bleeding</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Change Pad</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Clean</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Doctor talk</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Reminder</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Messages</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>New Update</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Call</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

                            </View>
                        </View>
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark}}>Promotions</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }} activeFillColor={'#6EDD55'} inactiveFillColor={'#3A416F'} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

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
        marginBottom: 10,
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
    listTab: {
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center',
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        margin: 5,
        backgroundColor: COLORS.lightGray

    },
    textTab: {
        fontSize: 16
    },
    tnTabTextActive: {
        color: COLORS.white
    },
    tnTabActive: {
        backgroundColor: COLORS.dark
    },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
    dropdownBox: {

        flexDirection: 'row',
        // height: 40,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
        borderWidth: 0

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
        marginTop: 10,
    },
    modalView: {
        width: "100%",
        justifyContent:'space-between',
        margin: 5,
        flex: 1,
        flexDirection:'row',
        backgroundColor: "white",
        borderRadius: 4,
        padding: 15,
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
        marginTop: 2,
    },
})
export default Screen;
