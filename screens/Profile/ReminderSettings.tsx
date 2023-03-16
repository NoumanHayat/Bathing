/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons } from '../../constants';
import ScreenHeader from '../../components/ScreenHader';
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
            <ScreenHeader navigation={navigation} title={'Reminder'} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View >
                                <Text style={{color:COLORS.dark,fontSize:12}}>Before Period Start</Text>
                            </View>
                            <View >
                                <Switch
                                    checked={check}
                                    onPress={(checked) => {
                                        setChecked(checked);
                                    }}  />

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
                                    }} activeFillColor={undefined} inactiveFillColor={undefined} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

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
                                    }} activeFillColor={undefined} inactiveFillColor={undefined} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

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
                                    }} activeFillColor={undefined} inactiveFillColor={undefined} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

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
                                    }} activeFillColor={undefined} inactiveFillColor={undefined} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

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
                                    }} activeFillColor={undefined} inactiveFillColor={undefined} thumbStyle={undefined} switchStyle={undefined} style={undefined} />

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
        marginTop:0
    },
    modalView: {
        width: "100%",
        height:45,
        justifyContent:'space-between',
        marginBottom: 17,
        flex: 1,
        flexDirection:'row',
        backgroundColor: "white",
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight:11
    },
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 2,
    },
})
export default Screen;
