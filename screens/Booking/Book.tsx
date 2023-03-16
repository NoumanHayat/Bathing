/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons,FONTS } from '../../constants';
import ScreenHeader from '../../components/ScreenHaderDashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallImageCard from '../../components/SmallImageCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/AppButton';
import ModalLayout from '../../components/CalenderModalLayoutPopUp';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const Screen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const { width, height } = Dimensions.get('window');
    const TimeButton = ({ title, active = false }) => {
        return (
            <TouchableOpacity>
                {!active ? (<View style={{ padding: 15, margin: 5, paddingTop: 5, paddingBottom: 5, borderColor: COLORS.white, borderWidth: 2, borderRadius: 8 }}>
                    <Text style={{ color: COLORS.white }}>{title}</Text>
                </View>) : (<View style={{ padding: 17, margin: 5, paddingTop: 8, paddingBottom: 8, borderRadius: 8, backgroundColor: COLORS.primaryOne }}>
                    <Text style={{ color: COLORS.dark }}>{title}</Text>
                </View>)}

            </TouchableOpacity>
        )
    };
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} onlyBack={true} />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.mainImage}>
                            <Image source={images.BathHouse_main} style={{ width: 238, height: 292, borderRadius: 3 }} />

                        </View>
                        <View style={styles.mainTextArea}>
                            <Text style={{ color: COLORS.gray, fontSize: 10 }}>#bath house</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 16, fontWeight: 'bold', marginTop: 35 }}>Luxe Bath House</Text>
                            <Text style={{ color: COLORS.gray, fontSize: 10, marginTop: 6 }}>Axis bath house house is the best bath near your home.</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 12.5, fontWeight: 'bold', marginTop: 11, }}>Location</Text>
                            <Text
                                style={{
                                    color: COLORS.darkgray,
                                    fontSize: 6,
                                }}>
                                <Ionicons name="location-outline" size={6} color="gray" />
                                California,Street 8 AE
                            </Text>
                            <Text style={{ color: COLORS.dark, fontSize: 12, fontWeight: 'bold', marginTop: 11, }}>Avavilability</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 8, fontSize: 6 }}>Available on Sunday </Text>
                            <View style={{ flexDirection: 'row', marginTop: 11 }}>
                                <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                <Image source={icons.star} style={{ width: 10, height: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Image source={icons.face} style={{ width: 21, height: 22 }} />
                                <Image source={icons.face} style={{ width: 21, height: 22, left: -7, position: 'relative' }} />
                                <Image source={icons.face} style={{ width: 21, height: 22, left: -7, position: 'relative' }} />
                                <Image source={icons.face} style={{ width: 21, height: 22, left: -7, position: 'relative' }} />
                                <Image source={icons.face} style={{ width: 21, height: 22, left: -7, position: 'relative' }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ color: COLORS.gray, fontSize: 6 }}>55 Review</Text>
                                <TouchableOpacity onPress={() => { alert('Working') }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 6 }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: 0, padding: 0, marginTop: 15, width: 270 }}>
                            <TouchableOpacity onPress={() => { alert('Ok') }}>
                                <SmallImageCard children={
                                    <View >
                                        <Image source={images.BathHouse_main} style={{ width: 73, height: 107, borderRadius: 10 }} />
                                    </View>
                                } />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { alert('Ok') }}>
                                <SmallImageCard children={
                                    <View >
                                        <Image source={{ uri: 'https://assets-smallimage.qssupplies.co.uk/M700-2022-6-20--8-40-59-162.jpg' }} style={{ width: 73, height: 107, borderRadius: 10 }} />
                                    </View>
                                } />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { alert('Ok') }}>
                                <SmallImageCard children={
                                    <View style={{}} >
                                        <Image source={{ uri: 'https://assets.aquaticbath.com/american-bath-group/image/upload/c_scale,q_100,w_1520/v1626205355/websites-product-info-and-content/aquatic/content/products/categories/bathtubs/aquatic-featureproduct-bathtubs.jpg' }} style={{ width: 73, height: 107, borderRadius: 10 }} />
                                    </View>
                                } />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.commentCard}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={icons.face} style={{ width: 21, height: 22 }} />
                                <View>
                                    <Text style={{ color: COLORS.white, fontSize: 10 }}>Amelia Clarke</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                        <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                        <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                        <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                        <Image source={icons.star} style={{ width: 10, height: 10 }} />
                                    </View>
                                </View>

                            </View>
                            <View style={{ marginTop: 8, backgroundColor: 'rgba(257, 257, 257, 0.2)', height: 69 }}>
                                <Text style={{ fontSize: 6, color: COLORS.white }}>Lorem ipsum dolor sit amet consectetur. Vestibulum mauris odio eget purus congue elementum viverra in elementum. Aliquet gravida lacinia quam a ac. Sapien ipsum phasellus libero senectus. Vel pellentesque vel pellentesque purus amet nunc neque. Aliquam est si</Text>
                            </View>


                        </View>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 12, marginTop: 16, marginBottom: 8 }}>Description</Text>
                        <Text style={{ color: COLORS.white, fontSize: 6 }}>Lorem ipsum dolor sit amet consectetur. Vestibulum mauris odio eget purus congue elementum viverra in elementum. Aliquet Aliquet gravida lacinia quam a ac. Sapien ipsum phasellus libero senectus. Vel pellentesque vel pellentesque purus amet nunc neque.neque Aliquam est sit laoreet nibh sapien. A nunc faucibus ut eleifend dolor eget lectus commodo. Sed tortor nulla massa ultrices.  ultrices. Tincidunt id id morbi euismod in cras dis ut. Lorem ipsum dolor sit amet consectetur. Vestibulum mauris odio eget puru conguadrtyu elementum viverra in elementum. Aliquet gravida lacinia quam a ac. Sapien ipsum phasellus libero senectus. Vel pellente  velatyghjk pellentesque purus amet nunc neque. Aliquam est sit laoreet nibh sapien. A nunc faucibus ut eleifend dolor eget lectus commodo.  Sed tortor nulla massa ultrices. Tincidunt id id morbi euismod in cras dis ut.Lorem ipsum dolor sit amet consectetur. Vestibulumthjkl mauris odio eget purus congue elementum viverra in elementum. Aliquet gravida lacinia quam a ac. Sapien ipsum phasellus libero fsenectus. Vel pellentesque vel pellentesque purus amet nunc neque. Aliquam est sit laoreet nibh sapien. A nunc faucibus ut eleifend dolor eget lectus commodo. Sed tortor nulla massa ultrices. Tincidunt id id morbi euismod in cras dis ut.Lorem ipsum dolor sit amet consectetur. Vestibulum mauris odio eget purus congue elementum viverra in elementum. Aliquet gravida lacinia quam a ac. Sapien ipsum phasellus libero senectus. Vel pellentesque vel pellentesque purus amet nunc neque. Aliquam est sit laoreet nibh sapien. A </Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 12, marginTop: 8, marginBottom: 6 }}>Date & Time</Text>
                        <TouchableOpacity onPress={() => { setVisible(true); }}>
                            <View style={styles.textBoxSign}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    marginLeft: '10%'
                                }}>
                                    <Text style={{ fontSize: 10, color: 'gray' }}>1st , October 222</Text>
                                </View>
                                <View style={styles.icons}>
                                    <AntDesign name="calendar" size={17} color="black" />
                                    {/* <Ionicons name="call-outline" size={24} color="black" /> */}
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 21, marginBottom: 1 }}>
                        <ScrollView horizontal={true}>
                            <TimeButton title={'12:00 PM'} />
                            <TimeButton title={'12:00 PM'} active={true} />
                            <TimeButton title={'12:00 PM'} />
                            <TimeButton title={'12:00 PM'} />
                            <TimeButton title={'12:00 PM'} />
                            <TimeButton title={'12:00 PM'} />
                        </ScrollView>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <AppButton
                            onPress={() => { navigation.push('PaymentMethod') }}
                            text="Book Now"
                            style={{
                                width: '100%',
                                marginTop: 18
                            }}
                            textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                        />
                    </View>
                </View>


            </ScrollView>
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
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    commentCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 120, marginTop: 11, height: 99, alignSelf: 'flex-end',
        padding: 4
    },
    container: {
        margin: 15,
        // backgroundColor: 'red',
        flex: 1,
    },
    icons: {
        alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 38,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
        width: Dimensions.get('window').width / 1.8,
    },
    topContainer: {
        flexDirection: 'row',
        // flex: 1,
        // width: 'auto',
    },
    mainImage: {
        // flex: 1,
    },
    mainTextArea: {
        flex: 0.8,
        // padding: 5,
        marginLeft: 10,
        // backgroundColor: 'red'
    }
})
export default Screen;
