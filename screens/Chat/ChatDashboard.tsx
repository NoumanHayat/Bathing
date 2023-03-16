/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, icons, images, FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { SearchBar } from '../../components/SearchBar';

const Screen = ({ navigation }) => {
    const [search, setSearch] = React.useState('');
    const [searchVisible, setSearchVisible] = React.useState(false);
    const [status, setStatus] = useState('All');

    const tablist = [
        { status: 'All' },
        { status: 'Primary' },
        { status: 'Unread' },
    ];
    const Data = [
        { status: 'Primary', active: false, key: 0, online: false },
        { status: 'Unread', active: true, key: 1, online: true },
        { status: 'Unread', active: true, key: 2, online: true },
        { status: 'Primary', active: false, key: 3, online: false },
        { status: 'Primary', active: false, key: 4, online: true },
        { status: 'Unread', active: true, key: 5, online: false },
        { status: 'Unread', active: true, key: 6, online: true },
        { status: 'Primary', active: false, key: 7, online: true },
        { status: 'Primary', active: false, key: 8, online: false },
        { status: 'Unread', active: true, key: 9, online: true },
        { status: 'Unread', active: true, key: 10, online: false },
        { status: 'Primary', active: false, key: 11, online: true },
        { status: 'Primary', active: false, key: 12, online: true },
        { status: 'Unread', active: true, key: 13, online: false },
        { status: 'Unread', active: true, key: 14, online: true },
        { status: 'Primary', active: false, key: 15, online: false },


    ];
    const [dataList, setDataList] = useState(Data);

    const setStatusFilter = (status) => {
        setStatus(status);
        if (status == 'All') {
            setDataList(Data);
        } else {
            setDataList([...Data.filter(e => e.status === status)]);
        }
    }

    const RenderCard = ({ item, index, navigation }) => {
        console.log(index);
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('ChatBot') }}>
                {item.active ? (<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, flex: 1 }}>
                    <View>

                        <Image source={images.Person} style={{ width: 48, height: 48, borderRadius: 50 }} />
                    </View>

                    <View style={{ marginLeft: 15, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Black }}>Albert Floress </Text>
                            <View>
                                {item.online ? (<Image source={icons.greenCycle} style={{ width: 9, height: 9 }} />) : (<Image source={icons.blackCycle} style={{ width: 9, height: 9 }} />)}

                            </View>
                        </View>
                        <Text style={{ color: COLORS.dark, fontSize: 12, fontFamily: FONTS.Normal }}>Hi Dear, How are you?</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'flex-end' }}>
                        {/* <Entypo name="message" size={24} color="red" /> */}
                        <Image source={icons.messageUnread} style={{ width: 30, height: 25 }} />

                    </View>
                </View>) : (<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, flex: 1 }}>
                    <View>
                        <Image source={images.Person} style={{ width: 40, height: 40, borderRadius: 50 }} />
                    </View>

                    <View style={{ marginLeft: 15, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: COLORS.dark, fontSize: 16, fontFamily: FONTS.Black }}>Albert Floress </Text>
                            <View>
                                {item.online ? (<Image source={icons.greenCycle} style={{ width: 9, height: 9 }} />) : (<Image source={icons.blackCycle} style={{ width: 9, height: 9 }} />)}

                            </View>
                        </View>
                        <Text style={{ color: COLORS.dark }}>Hi Dear, How are you?</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'flex-end' }}>
                        {/* <AntDesign name="mail" size={24} color="black" /> */}
                        <Image source={icons.messagePending} style={{ width: 28, height: 23 }} />
                    </View>
                </View>)}
            </TouchableOpacity>

        );
    }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Chats" navigation={navigation} onlyBack={true} />
            {/* <KeyboardAwareScrollView> */}
            <View style={styles.searchbar}>
                <SearchBar onPress={() => { setSearchVisible(true); }} backgroudColor={COLORS.lightGray} placeholderColor={COLORS.dark} setSearch={setSearch} title={''} />
            </View>
            <View style={styles.container}>


                {/* <View style={styles.listTab}>
                    {
                        tablist.map((tab) => {
                            return (
                                <TouchableOpacity key={tab.status} style={[styles.btnTab, tab.status === status && styles.tnTabActive]}
                                    onPress={() => { setStatusFilter(tab.status); }}>
                                    <Text style={[styles.textTab, tab.status === status && styles.tnTabTextActive]}>{tab.status}</Text>
                                </TouchableOpacity>)
                        })
                    }
                </View> */}
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
                <View >
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'right', fontSize: 10, fontFamily: FONTS.Normal }}>Mark all as Unread</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={dataList}
                    // keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index}>
                                <RenderCard item={item} navigation={navigation} index={index} />
                            </View>
                        )
                    }}
                />
            </View>
            {/* </KeyboardAwareScrollView> */}
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    searchbar: {
        flexDirection: 'row',
        height: 41,
        marginHorizontal: 20,


    },
    cycleBox: {
        backgroundColor: '#FFFFFF', flex: 1, margin: 5,
        borderRadius: 20,
        // padding: 35,
        // alignItems: "center",
        // justifyContent:'center',
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container: {
        flex: 1,
        margin: 30,
        marginBottom: 10,
        marginTop: 0,
    },
    modalView: {
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        // justifyContent:'center',
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
        marginTop: 22
    },
    listTab: {
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 19,
        borderRadius: 5,
        backgroundColor: 'white',
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 4,
        paddingBottom: 4,
    },
    btnTab: {
        width: 115,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        marginLeft: 5,
        // backgroundColor: 'rgba(61, 38, 69, 0.2)'

    },

    textTab: {
        fontSize: 10,
        color: 'black',
        fontFamily: FONTS.Normal,
    },
    tnTabActive: {
        backgroundColor: COLORS.dark
    },
    tnTabTextActive: {
        color: COLORS.white
    }

})
export default Screen;
