/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons } from '../../constants';
import ScreenHeader from '../../components/ScreenHaderDashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallImageCard from '../../components/SmallImageCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/AppButton';
import ModalLayout from '../../components/ModalLayout';
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
                            <Image source={images.BathHouse_main} style={{ width: 238, height: 292, borderRadius: 15 }} />
                        </View>
                        <View style={styles.mainTextArea}>
                            <Text style={{ color: COLORS.gray }}>#bath house</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 28, fontWeight: 'bold', marginTop: '20%' }}>Luxe Bath House</Text>
                            <Text style={{ color: COLORS.gray, fontSize: 17, }}>Axis bath house house is the best bath near your home.</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 19, fontWeight: 'bold', marginTop: '5%', }}>Location</Text>
                            <Text
                                style={{
                                    color: COLORS.darkgray,
                                    fontSize: 14,
                                }}>
                                <Ionicons name="location-outline" size={14} color="gray" />
                                California,Street 8 AE
                            </Text>
                            <Text style={{ color: COLORS.dark, fontSize: 22, fontWeight: 'bold', marginTop: '5%', }}>Avavilability</Text>
                            <Text style={{ color: COLORS.gray }}>Available on Sunday </Text>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Image source={icons.star} style={{ width: 20, height: 20 }} />
                                <Image source={icons.star} style={{ width: 20, height: 20 }} />
                                <Image source={icons.star} style={{ width: 20, height: 20 }} />
                                <Image source={icons.star} style={{ width: 20, height: 20 }} />
                                <Image source={icons.star} style={{ width: 20, height: 20 }} />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Image source={icons.face} style={{ width: 30, height: 30 }} />
                                <Image source={icons.face} style={{ width: 30, height: 30, left: -3 }} />
                                <Image source={icons.face} style={{ width: 30, height: 30, left: -3 }} />
                                <Image source={icons.face} style={{ width: 30, height: 30, left: -3 }} />
                                <Image source={icons.face} style={{ width: 30, height: 30, left: -3 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ color: COLORS.gray }}>55 Review</Text>
                                <TouchableOpacity onPress={() => { alert('Working') }}>
                                    <Text style={{ color: COLORS.dark }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => { alert('Ok') }}>
                            <SmallImageCard children={
                                <View >
                                    <Image source={images.BathHouse_main} style={{ width: width / 4.2, height: 90, borderRadius: 10 }} />
                                </View>
                            } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert('Ok') }}>
                            <SmallImageCard children={
                                <View >
                                    <Image source={{ uri: 'https://assets.aquaticbath.com/american-bath-group/image/upload/c_scale,q_100,w_1520/v1626205355/websites-product-info-and-content/aquatic/content/products/categories/bathtubs/aquatic-featureproduct-bathtubs.jpg' }} style={{ width: width / 4.2, height: 90, borderRadius: 10 }} />
                                </View>
                            } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert('Ok') }}>
                            <SmallImageCard children={
                                <View >
                                    <Image source={{ uri: 'https://assets-smallimage.qssupplies.co.uk/M700-2022-6-20--8-40-59-162.jpg' }} style={{ width: width / 4.2, height: 90, borderRadius: 10 }} />
                                </View>
                            } />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { alert('Ok') }}>
                            <SmallImageCard children={
                                <View style={{}} >
                                    <Image source={{ uri: 'https://assets.aquaticbath.com/american-bath-group/image/upload/c_scale,q_100,w_1520/v1626205355/websites-product-info-and-content/aquatic/content/products/categories/bathtubs/aquatic-featureproduct-bathtubs.jpg' }} style={{ width: width / 4.2, height: 90, borderRadius: 10 }} />
                                </View>
                            } />
                        </TouchableOpacity>


                    </View>
                    <View>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 19 }}>Description</Text>
                        <Text style={{ color: COLORS.dark }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue leo nec diam posuere pretium. Aenean mollis augue turpis, vitae eleifend dolor rutrum quis. Fusce lacinia faucibus dolor, sed faucibus massa. Nullam id tortor nulla. Sed est ante, posuere ut dui nec, condimentum convallis orci. Maecenas volutpat semper auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla interdum lorem quis tincidunt elementum. Fusce pharetra mi nibh, et tristique nulla cursus nec. In non vestibulum ante. Integer elementum dignissim vulputate. Etiam rutrum leo felis, ac gravida purus dictum pharetra.</Text>
                    </View>
                    <View>
                        <Text style={{ color: COLORS.dark, fontWeight: 'bold', fontSize: 19 }}>Date & Time</Text>
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
                                    <AntDesign name="calendar" size={24} color="black" />
                                    {/* <Ionicons name="call-outline" size={24} color="black" /> */}
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 1}}>
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
                                marginTop: 30
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
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 15,
        // backgroundColor: 'red',
        flex: 1,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
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
        flex: 1,
        // eslint-disable-next-line no-undef
        width: "auto",
    },
    mainImage: {
        flex: 1,
    }, mainTextArea: {
        flex: 0.6,
        padding: 5
    }
})
export default Screen;
