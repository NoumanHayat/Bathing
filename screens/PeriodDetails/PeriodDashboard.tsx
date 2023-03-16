/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, icons, FONTS } from '../../constants';
import AppButton from '../../components/AppButton';
import { SearchBar } from '../../components/SearchBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
// import {AppCardButton} from '../../components/AppCardButton';
const CustomCard = ({ children, navigation }) => {
    return (
        // <View style={styles.centeredView}>
        <LinearGradient
            style={styles.centeredView}
            useAngle={true}
            angle={180}
            colors={['#7279B3', '#6A72B6', '#B7BFFE']}>
            <TouchableOpacity onPress={() => { navigation.navigate('TrackmyPeriod') }}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </TouchableOpacity>
        </LinearGradient>
        // </View>
        // </TouchableOpacity>
    );
};

const CycleCard = ({ children }) => {
    return (

        <LinearGradient
            style={styles.centeredViewCycle}
            useAngle={true}
            angle={180}
            colors={['#B7BFFE', '#FFD4FF']}>
            <TouchableOpacity>
                <View style={styles.modalViewCycle}>
                    {children}
                </View>
            </TouchableOpacity>
        </LinearGradient>
        // </TouchableOpacity>
    );
}
const Screen = ({ navigation }) => {
    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;
    let bottomBar = Dimensions.get('window').scale;
    console.log(Dimensions.get('screen'));
    console.log(Dimensions.get('window'));
    const [search, setSearch] = React.useState('');
    const [searchVisible, setSearchVisible] = React.useState(false);
    const Images = [
        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
        { source: { uri: 'https://picsum.photos/200/300?random=1' } },
        { source: { uri: 'https://picsum.photos/200/300?random=2' } },
        { source: { uri: 'https://picsum.photos/200/300?random=3' } },
        { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
        { source: { uri: 'https://picsum.photos/200/300?random=1' } },
        { source: { uri: 'https://picsum.photos/200/300?random=2' } },
    ];
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard navigation={navigation} title={"Status"} />
            <SafeAreaView>
                <KeyboardAwareScrollView>

                    <View
                        style={{
                            flex: 1,
                            marginBottom: 75,
                        }}>
                        <View style={{ margin: 15 }}>
                            <View style={styles.searchbar}>
                                <SearchBar title="Search here" onPress={() => { setSearchVisible(true) }} backgroudColor={COLORS.lightGray} placeholderColor={COLORS.dark} setSearch={setSearch} />
                                <AppButton text={''} icon={icons.searchHere} iconStyle={{ width: 20, height: 20, marginLeft: 0 }} style={{ marginLeft: 5, justifyContent: 'center' }} onPress={() => { alert('Oks') }} />
                            </View>

                            <View style={{ margin: 15 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: 'bold' }}>Goals</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CustomCard navigation={navigation} children={
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={icons.trackmyperiod} style={{ width: 70, height: 70 }} />
                                            <Text style={{ color: COLORS.white, fontSize: 15, marginTop: 5 }}>Track My Period</Text>
                                        </View>} />
                                    <CustomCard navigation={navigation} children={
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={icons.TrytoConceive} style={{ width: 70, height: 70 }} />
                                            <Text style={{ color: COLORS.white, fontSize: 15, marginTop: 5 }}>Try to Conceive</Text>
                                        </View>} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CustomCard navigation={navigation} children={
                                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                            <Image source={icons.FindExcercise} style={{ width: 70, height: 70 }} />
                                            <Text style={{ color: COLORS.white, fontSize: 15, marginTop: 5 }}>Find Exercise</Text>
                                        </View>} />
                                    <CustomCard navigation={navigation} children={
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={icons.TalktoaDoctor} style={{ width: 70, height: 70 }} />
                                            <Text style={{ color: COLORS.white, fontSize: 15, marginTop: 5 }}>Talk to a Doctor</Text>
                                        </View>} />
                                </View>
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 16, fontWeight: 'bold' }}>My Cycle</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <View style={{ flex: 1, margin: 5 }}>
                                        <TouchableOpacity onPress={() => { navigation.navigate('CycleHistory') }}>
                                            <LinearGradient
                                                useAngle={true}
                                                angle={180}
                                                colors={['#B7BFFE', '#FFD4FF']}>

                                                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                                                    <View style={{ backgroundColor: 'white', padding: 13 }}>
                                                        <Image source={icons.cycle} style={{ width: 40, height: 40 }} />
                                                    </View>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ color: COLORS.gray }}>A Full Period</Text>

                                                        <Text style={{ color: COLORS.gray }}>Cycle</Text>
                                                        <Text style={{ color: COLORS.dark }}>29 Days</Text>
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ flex: 1, margin: 5 }}>
                                        <TouchableOpacity onPress={() => { alert('ok') }}>
                                            <LinearGradient
                                                useAngle={true}
                                                angle={180}
                                                colors={['#B7BFFE', '#FFD4FF']}>

                                                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                                                    <View style={{ backgroundColor: 'white', padding: 13 }}>
                                                        <Image source={icons.clock} style={{ width: 40, height: 40 }} />
                                                    </View>
                                                    <View style={{ margin: 5 }}>
                                                        {/* onPress={()=>{navigation.navigate('TrackmyPeriod')}} */}
                                                        <Text style={{ color: COLORS.gray }}>Average Period </Text>

                                                        <Text style={{ color: COLORS.gray }}>length </Text>
                                                        <Text style={{ color: COLORS.dark }}>05 Days</Text>
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 16, fontWeight: 'bold' }}>Fertility</Text>
                            </View>
                            <View>
                                <View style={styles.cardCenteredView}>
                                    <View style={styles.cardModalView}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: FONTS.Medium }}>11 Days are remaingin to your period</Text>
                                                <Text style={{ color: '#7279B3', fontSize: 10 }}>Will be start on 31 Nov</Text>
                                            </View>
                                            <View style={{ marginTop: 20 }}>
                                                <Image source={icons.redDrop} style={{ width: 50, height: 70 }} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 16, fontWeight: 'bold' }}>Mood</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity>
                                    <View style={styles.emojiCenteredView}>
                                        <View style={{ ...styles.emojiModalView, backgroundColor: '#FFD4FF', }}>
                                            <Image source={{ uri: 'https://i.pinimg.com/564x/d4/ca/bb/d4cabb116b3bd1b061c93095f8e746f2.jpg' }} style={{ width: 30, height: 30, backgroundColor: '#FFD4FF' }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.emojiCenteredView}>
                                        <View style={styles.emojiModalView}>
                                            <Image source={{ uri: 'https://i.pinimg.com/564x/8e/88/c4/8e88c4065258dcedfd519e6a518b22e5.jpg' }} style={{ width: 30, height: 30 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.emojiCenteredView}>
                                        <View style={styles.emojiModalView}>
                                            <Image source={{ uri: 'https://i.pinimg.com/564x/0a/7b/da/0a7bda61a7367af03df8614f92e6ece0.jpg' }} style={{ width: 30, height: 30 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.emojiCenteredView}>
                                        <View style={styles.emojiModalView}>
                                            <Image source={{ uri: 'https://i.pinimg.com/564x/83/2b/4c/832b4c9cb9a593e9f2119df9a94d8912.jpg' }} style={{ width: 30, height: 30 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.emojiCenteredView}>
                                        <View style={styles.emojiModalView}>
                                            <Image source={{ uri: 'https://i.pinimg.com/564x/37/28/23/372823883a153a5268c87e2a5616a5be.jpg' }} style={{ width: 30, height: 30 }} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={{ color: COLORS.dark, fontSize: 16, fontWeight: 'bold' }}>Birth Control</Text>
                            </View>
                            <View>
                                <LinearGradient
                                    useAngle={true}
                                    angle={180}
                                    colors={['#CA6CEB', '#FFD4FF']}>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={styles.cardCenteredView}>
                                            <View style={styles.cardModalViewTwo}>

                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ fontSize: 20, color: COLORS.dark, fontFamily: FONTS.Normal }}>Control</Text>
                                                    <Text style={{ fontSize: 20, color: '#7279B3', fontWeight: 'bold' }}>Birth <Text style={{ color: '#000000' }}>With</Text></Text>
                                                    <Text style={{ fontSize: 20, color: 'FFFFFF', fontFamily: FONTS.Normal }}>Mikvah</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                    {/* <AppButton text="Select"  onPress={() => { alert('Ok') }} /> */}
                                                    <TouchableOpacity onPress={() => { alert('Ok') }} style={{
                                                        backgroundColor: 'white', paddingVertical: 11, paddingHorizontal: 43, borderRadius: 5, elevation: 3,
                                                        shadowOffset: {
                                                            width: 10,
                                                            height: 10
                                                        },
                                                        shadowOpacity: 0.5,
                                                        shadowColor: 'black',

                                                        shadowRadius: 4,
                                                    }} >
                                                        <Text style={{ fontFamily: FONTS.Normal,color:COLORS.black, fontSize: 14 }}>Select</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                            {/* <View style={{ flexDirection: 'row', flex: 1 }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{ fontSize: 22, color: COLORS.dark }}>Control</Text>
                                                <Text style={{ fontSize: 22, color: 'blue', fontWeight: 'bold' }}>Birth <Text style={{ color: COLORS.dark }}>With</Text></Text>
                                                <Text style={{ fontSize: 22, color: 'white' }}>Mikvah</Text>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <AppButton text="Select" onPress={() => { alert('Ok') }} />
                                            </View>
                                        </View> */}
                                        </View>
                                    </View>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    // =============================================================
    searchbar: {
        flexDirection: 'row',
        height: 45,
    },
    modalView: {
        width: "100%",
        margin: 20,
        overflow: 'hidden',
        borderRadius: 20,
        padding: 35,


    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 7,


        // shadowOffset: {
        //     width: 10,
        //     height: 10,
        //   },
        //   shadowOpacity:0.5,
        //   shadowRadius:4
        elevation: 3,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.5,
        shadowColor: 'black',

        shadowRadius: 4,

    },
    centeredViewCycle: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 7,
    },
    modalViewCycle: {
        // width: "50%",
        margin: 20,
        // overflow: 'hidden',
        borderRadius: 20,
        // padding: 35,
    },
    cardModalView: {
        width: "100%",
        margin: 5,
        backgroundColor: "#FFD4FF",
        borderRadius: 14,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cardModalViewTwo: {
        flexDirection: 'row',
        width: "100%",
        margin: 5,
        borderRadius: 14,
        padding: 15,

        // elevation: 3,
        paddingVertical: 29,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowColor: 'rgba(0, 0, 0, 0.25)',

        shadowRadius: 4,
    },
    cardCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
    },
    emojiModalView: {
        // width: "100%",
        margin: 5,
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    emojiCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
    },
});
export default Screen;
