/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../../constants';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/SmallButton';
import { Divider } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import ModalLayout from '../../components/CalenderModalLayoutPopUp';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import ScreenHeader from '../../components/ScreenHader';
const Screen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const data = [
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ];
    const [selected, setSelected] = useState('Appliances');
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} title={"Status"} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Status</Text>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            inputStyles={{color: 'gray'}}
                            dropdownTextStyles={{color: 'gray'}}
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
                <View style={{ marginTop: '10%' }}>
                    <Text style={styles.titleTwo}>Date of Birth</Text>
                    <TouchableOpacity onPress={() => { setVisible(true); }}>
                        <View style={styles.textBoxSign}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                marginLeft: '10%'
                            }}>
                                <Text style={{ fontSize: 14, color: 'gray' }}>1st , October 222</Text>
                            </View>
                            <View style={styles.icons}>
                                <AntDesign name="calendar" size={16} color="black" />
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: '10%', alignItems: 'flex-end' }}>
                    <AppButton
                        onPress={() => { navigation.push('Location'); }}
                        text="Next"
                        style={{
                            width: '40%',
                        }}
                        icon={icons.line}
                        textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                    />
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
                    <View  style={{justifyContent:'center',alignItems:'center',width:276}}>
                        {/* <Calendar
                            scrollEnabled={false}
                            hideArrows={true}

                            markingType={'period'}
                            initialDate={'2023-02-15'}
                            renderHeader={(date) => {
                                // "2023-02-15T00:00:00.000Z"
                                console.log(date);
                                return (<View style={{ width: '100%' }}>
                                    <Text style={{ fontFamily: FONTS.Black, fontSize: 25, color: 'black' }}>{String(date).slice(7, 12)}<Text style={{ fontFamily: FONTS.Normal, fontSize: 25 }}>{String(date).slice(12, 17)}</Text></Text>
                                </View>)
                            }}
                            markedDates={{
                                '2023-02-21': { startingDay: true, color: '#FFD4FF', textColor: 'black' },
                                                            }}

                            // theme={{ 'stylesheet.calendar.header': { header: { flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 100, paddingRight: 100, marginTop: 1, alignItems: 'center' } } }}

                            theme={{
                                textDayFontSize: 16,
                                'stylesheet.calendar.main': {
                                    week: {
                                        marginTop: 3,
                                        marginBottom: 3,
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                    },
                                },
                            }}
                        /> */}
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
            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 55,
    },
    title: {
        color: COLORS.dark,
        fontSize: 19
    },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 50,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
    },
    icons: {
        // height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
        flex: 0.1,
        justifyContent: 'center',
        // alignItems: 'center',
        marginRight: 10,
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: COLORS.white,
        marginBottom: 0,
        borderWidth:0,
    }
});
export default Screen;
