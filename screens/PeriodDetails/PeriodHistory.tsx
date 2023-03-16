/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, icons, FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Divider } from 'react-native-paper';
import ModalLayout from '../../components/CalenderModalLayout';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const CustomCard = () => {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{ fontSize: 18, color: COLORS.dark, padding: 10, fontWeight: 'bold' }}>January 2023</Text>

            </View>
        </View>
    );
};
const Screen = ({ navigation }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const [visible, setVisible] = useState(true);
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Period History" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={{ color: COLORS.dark, fontSize: 24, fontWeight: 'bold' }}>2023</Text>
                    </View>
                    <View >
                        {visible && (
                            <ModalLayout
                                onClose={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <View >
                                    <View >
                                        <Calendar
                                            scrollEnabled={false}
                                            hideArrows={true}
                                            // markedDates={{
                                            //     '2023-01-01': { selected: true, marked: true, selectedColor: 'blue' },
                                            // }}
                                            markingType={'period'}
                                            initialDate={'2023-02-15'}
                                            renderHeader={(date) => {
                                                // "2023-02-15T00:00:00.000Z"
                                                console.log(date);
                                                return (<View style={{width:'100%'}}>
                                                    <Text style={{fontFamily:FONTS.Black,fontSize:25,color:'black'}}>{String(date).slice(7, 12)}<Text style={{fontFamily:FONTS.Normal,fontSize:25}}>{String(date).slice(12, 17)}</Text></Text>
                                                </View>)
                                            }}
                                            markedDates={{
                                                '2023-02-21': { startingDay: true, color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-22': { color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-23': { color: '#FFD4FF', textColor: 'black', marked: true, dotColor: 'white' },
                                                '2023-02-24': { color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-25': { endingDay: true, color: '#FFD4FF', textColor: 'white' },
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
                                        />
                                    </View>
                                </View>
                            </ModalLayout>
                        )}


                    </View>
                    <View >
                        {visible && (
                            <ModalLayout
                                onClose={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <View >
                                    <View >
                                        <Calendar
                                            scrollEnabled={false}
                                            hideArrows={true}
                                    
                                            markingType={'period'}
                                            initialDate={'2023-02-15'}
                                            renderHeader={(date) => {
                                                // "2023-02-15T00:00:00.000Z"
                                                console.log(date);
                                                return (<View style={{width:'100%'}}>
                                                    <Text style={{fontFamily:FONTS.Black,fontSize:25,color:'black'}}>{String(date).slice(7, 12)}<Text style={{fontFamily:FONTS.Normal,fontSize:25}}>{String(date).slice(12, 17)}</Text></Text>
                                                </View>)
                                            }}
                                            markedDates={{
                                                '2023-02-21': { startingDay: true, color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-22': { color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-23': { color: '#FFD4FF', textColor: 'black', marked: true, dotColor: 'white' },
                                                '2023-02-24': { color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-25': { endingDay: true, color: '#FFD4FF', textColor: 'white' },
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
                                        />
                                    </View>
                                </View>
                            </ModalLayout>
                        )}


                    </View>
                    <View >
                        {visible && (
                            <ModalLayout
                                onClose={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <View >
                                    <View >
                                        <Calendar
                                            scrollEnabled={false}
                                            hideArrows={true}
                                            // markedDates={{
                                            //     '2023-01-01': { selected: true, marked: true, selectedColor: 'blue' },
                                            // }}
                                            markingType={'period'}
                                            initialDate={'2023-02-15'}
                                            renderHeader={(date) => {
                                                // "2023-02-15T00:00:00.000Z"
                                                console.log(date);
                                                return (<View style={{width:'100%'}}>
                                                    <Text style={{fontFamily:FONTS.Black,fontSize:25,color:'black'}}>{String(date).slice(7, 12)}<Text style={{fontFamily:FONTS.Normal,fontSize:25}}>{String(date).slice(12, 17)}</Text></Text>
                                                </View>)
                                            }}
                                            markedDates={{
                                                '2023-02-21': { startingDay: true, color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-22': { color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-23': { color: '#FFD4FF', textColor: 'black', marked: true, dotColor: 'white' },
                                                '2023-02-24': { color: '#FFD4FF', textColor: 'black' },
                                                '2023-02-25': { endingDay: true, color: '#FFD4FF', textColor: 'white' },
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
                                        />
                                    </View>
                                </View>
                            </ModalLayout>
                        )}


                    </View>
                    {/* <View >
                        {visible && (
                            <ModalLayout
                                onClose={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <View >
                                    <View>
                                        <Calendar
                                            scrollEnabled={false}
                                            hideArrows={true}
                                            // markedDates={{
                                            //     '2023-01-01': { selected: true, marked: true, selectedColor: 'blue' },
                                            // }}
                                            markingType={'period'}
                                            initialDate={'2023-01-15'}

                                            markedDates={{
                                                '2023-01-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
                                                '2023-01-22': { color: '#70d7c7', textColor: 'white' },
                                                '2023-01-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
                                                '2023-01-24': { color: '#70d7c7', textColor: 'white' },
                                                '2023-01-25': { endingDay: true, color: '#50cebb', textColor: 'white' }
                                            }}
                                        />
                                    </View>
                                </View>
                            </ModalLayout>
                        )}


                    </View>
                    <View >
                        {visible && (
                            <ModalLayout
                                onClose={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <View >
                                    <View>
                                        <Calendar
                                            scrollEnabled={false}
                                            hideArrows={true}
                                            // markedDates={{
                                            //     '2023-01-01': { selected: true, marked: true, selectedColor: 'blue' },
                                            // }}
                                            markingType={'period'}
                                            initialDate={'2023-02-15'}

                                            markedDates={{
                                                '2023-02-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
                                                '2023-02-22': { color: '#70d7c7', textColor: 'white' },
                                                '2023-02-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
                                                '2023-02-24': { color: '#70d7c7', textColor: 'white' },
                                                '2023-02-25': { endingDay: true, color: '#50cebb', textColor: 'white' }
                                            }}
                                        />
                                    </View>
                                </View>
                            </ModalLayout>
                        )}


                    </View>
 */}

                    {/* <View >
                        {visible && (
                            <ModalLayout
                                onClose={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <View style={{ height: 233,alignItems:'center' }}>
                                    <View>
                                        <Calendar
                                            scrollEnabled={false}
                                            hideArrows={true}
                                            markingType={'period'}
                                            initialDate={'2023-03-15'}
                                            calenderStyle={{height: 200,backgroundColor:'red'}}
                                            style={{
                                                borderWidth: 0,
                                                borderColor: 'gray',
                                                height: 50,
                                                width:'100%',
                                                justifyContent:'center',
                                              
                                               
                                            }}
                                            renderHeader={date => {
                                                return(<Text></Text>)
                                              }}
                                            markedDates={{
                                                '2023-03-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
                                                '2023-03-22': { color: '#70d7c7', textColor: 'white' },
                                                '2023-03-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
                                                '2023-03-24': { color: '#70d7c7', textColor: 'white' },
                                                '2023-03-25': { endingDay: true, color: '#50cebb', textColor: 'white' },
                                            }}
                                            theme={{
                                                backgroundColor: 'yellow',
                                                textSectionTitleColor: '#b6c1cd',
                                                textSectionTitleDisabledColor: '#d9e1e8',
                                                selectedDayBackgroundColor: '#00adf5',
                                                selectedDayTextColor: '#ffffff',
                                                todayTextColor: '#00adf5',
                                                dayTextColor: '#2d4150',
                                                textDisabledColor: '#d9e1e8',
                                                dotColor: '#00adf5',
                                                selectedDotColor: '#ffffff',
                                                arrowColor: 'orange',
                                                disabledArrowColor: '#d9e1e8',
                                                monthTextColor: 'black',
                                                indicatorColor: 'blue',
                                                textDayFontFamily: 'monospace',
                                                textMonthFontFamily: 'monospace',
                                                textDayHeaderFontFamily: 'monospace',
                                                textDayFontWeight: '300',
                                                textMonthFontWeight: 'bold',
                                                textDayHeaderFontWeight: '300',
                                                textDayFontSize: 11,
                                                textMonthFontSize: 25,
                                                textDayHeaderFontSize: 11,
                                            }}
                                        />
                                    </View>
                                </View>
                            </ModalLayout>
                        )}


                    </View> */}

                    {/* <TouchableOpacity onPress={() => { setVisible(true) }}>
                        <Text style={{ color: COLORS.dark }}>Show</Text>
                    </TouchableOpacity> */}
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    cardStyle: {
        padding: 10,
        flexDirection: 'row',
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10,
    },
    modalView: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        // padding: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});
export default Screen;
