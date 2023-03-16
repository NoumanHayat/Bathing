/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, SafeAreaView, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/AppButton';
import { Divider } from 'react-native-paper';
import { SearchBar } from '../../components/SearchBar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProgressCard from '../../components/ProgressCard';
import CircularProgress from 'react-native-circular-progress-indicator';
import AppText from '../../components/AppText';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import HalfCard from '../../components/halfCard';
import AddMoreCard from '../../components/AddMoreCard';

// import {AppCardButton} from '../../components/AppCardButton';
const Screen = ({ navigation }) => {
    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;
    let bottomBar = Dimensions.get('window').scale;
    console.log(Dimensions.get('screen'));
    console.log(Dimensions.get('window'));
    const [search, setSearch] = React.useState('');
    const [searchVisible, setSearchVisible] = React.useState(false);
    const Images = [
        // { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg', active: false } },
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
                    <ScrollView>
                        <View
                            style={{
                                flex: 1,
                                marginBottom: 75,
                            }}>
                            <View style={{ margin: 15 }}>
                                <View style={styles.searchbar}>
                                    <SearchBar onPress={() => { setSearchVisible(true) }} backgroudColor={COLORS.lightGray} placeholderColor={COLORS.dark} setSearch={setSearch} />
                                    <AppButton text={''} boxStyles={{
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                    }} icon={icons.searchIcon} iconStyle={{ width: 20, height: 20, marginLeft: 0 }} style={{ marginLeft: 5, justifyContent: 'center' }} onPress={() => { alert('Ok') }} />
                               {/* <Image source={icons.searchIcon} style={{ width: 20, height: 20 }} /> */}
                                </View>
                                <View style={{ marginTop: 20, marginBottom: 25 }}>
                                    <ProgressCard
                                        leftContent={
                                            <View >
                                                <Text style={{ color: COLORS.white, fontSize: 30 }}>Emma</Text>
                                                <Text style={{ color: COLORS.primaryOne, fontSize: 16 }}>Start Your</Text>
                                                <Text style={{ color: COLORS.primaryOne, fontSize: 16 }}>Cycle with</Text>
                                                <Text style={{ color: '#B7BFFE', fontSize: 19 }}>Mikvah</Text>
                                                <View
                                                    style={{
                                                        overflow: 'hidden',
                                                        alignSelf: 'baseline',
                                                        // backgroundColor: COLORS.white,
                                                        borderWidth: 1,
                                                        borderColor: COLORS.white,
                                                        borderRadius: 5,
                                                        marginTop: 10
                                                    }}>
                                                    <LinearGradient
                                                        // style={{ flex: 1 }}
                                                        useAngle={true}
                                                        angle={90}

                                                        start={{ x: 0.5, y: 0 / 5 }} end={{ x: 1, y: 0.5 }}
                                                        colors={['#FFD4FF', '#B7BFFE']}>

                                                        <TouchableHighlight underlayColor={'#00000028'} onPress={() => { alert('Ok') }}>
                                                            <View
                                                                style={{
                                                                    flexDirection: 'row',
                                                                    paddingHorizontal: 24,
                                                                    paddingVertical: 7,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                }}>
                                                                <AppText fontWeight="Bold" style={{ color: COLORS.dark, fontSize: 12 }}>
                                                                    Set Up
                                                                </AppText>
                                                            </View>
                                                        </TouchableHighlight>
                                                    </LinearGradient>
                                                </View>
                                            </View>
                                        }
                                        rightContent={
                                            <View >
                                                <CircularProgress
                                                    value={100}
                                                    activeStrokeWidth={12}
                                                    title={'Progress'}
                                                    progressValueColor={COLORS.dark}
                                                    inActiveStrokeColor={COLORS.secondary}
                                                    activeStrokeColor={'#FFD4FF'}
                                                    showProgressValue={false}
                                                    inActiveStrokeOpacity={1}
                                                    inActiveStrokeWidth={5}
                                                />
                                            </View>
                                        }
                                    >
                                    </ProgressCard>
                                </View>
                                <View style={{ margin: 15 }}>
                                    <Text style={{ color: COLORS.dark, fontSize: 20, fontWeight: 'bold' }}>Book Bath House</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <TouchableOpacity  onPress={() => { navigation.navigate('Book') }}>
                                        <HalfCard active={true} children={
                                            <View style={{ padding: 7 }}>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Image source={{uri: 'http://i.imgur.com/XP2BE7q.jpg'}} style={
                                                        {
                                                            height: 134,
                                                            width: '95%',
                                                            borderRadius: 3,

                                                        }
                                                    } />
                                                </View>
                                                <View style={{}} >
                                                    <View style={{ marginVertical: 15 }}>
                                                        <Text style={{ color: '#FFD4FF', fontSize: 14, fontWeight: 'bold' }}>Luxe Bath House</Text>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ width: '70%' }}>
                                                                <Text style={{ color: '#B4B0B0', fontSize: 10 }}>Luxe bath house is the best bath near your home.</Text>
                                                                <View style={{ paddingTop: 10 }}>
                                                                    <Text style={{ color: COLORS.white, }}>$<Text style={{ fontSize: 20 }}>100</Text> per day</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{ justifyContent: 'flex-end', alignItems: 'center', width: '30%' }}>
                                                                <Image source={icons.ActiveNext} style={{ width: 20, height: 20 }} />
                                                            </View>
                                                        </View>
                                                    </View>

                                                </View>

                                            </View>
                                        } />
                                    </TouchableOpacity>
                                    {Images.map((imagee, index) => {
                                        return (
                                            <TouchableOpacity key={index} onPress={() => { navigation.navigate('Book') }}>
                                                <HalfCard children={
                                                    <View style={{ padding: 7 }}>
                                                        <View style={{ alignItems: 'center' }}>
                                                            <Image source={{uri: 'https://picsum.photos/200/300?random=1'}} style={
                                                                {
                                                                    height: 134,
                                                                    width: '95%',
                                                                    borderRadius: 3,

                                                                }
                                                            } />
                                                        </View>
                                                        <View style={{}} >
                                                            <View style={{ marginVertical: 15 }}>
                                                                <Text style={{ color: COLORS.dark, fontSize: 14, fontWeight: 'bold' }}>Luxe Bath House</Text>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <View style={{ width: '70%' }}>
                                                                        <Text style={{ color: '#B4B0B0', fontSize: 10 }}>Luxe bath house is the best bath near your home.</Text>
                                                                        <View style={{ paddingTop: 10 }}>
                                                                            <Text style={{ color: COLORS.dark, }}>$<Text style={{ fontSize: 20 }}>100</Text> per day</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View style={{ justifyContent: 'flex-end', alignItems: 'center', width: '30%' }}>
                                                                        <Image source={icons.Next} style={{ width: 20, height: 20 }} />
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </View>

                                                    </View>
                                                } />
                                            </TouchableOpacity>
                                        )
                                    })}
                                    <TouchableOpacity onPress={() => { alert('Ok') }}>
                                        <AddMoreCard children={
                                            <View style={{ padding: 7, justifyContent: 'center', alignItems: 'center' }}>
                                                {/* <Text><Entypo name="dots-two-horizontal" size={24} color="black" /><Entypo name="dots-two-horizontal" size={24} color="black" /></Text> */}
                                                <MaterialCommunityIcons name="dots-horizontal" size={54} color="white" />
                                                <Text style={{ color: COLORS.dark }}>More</Text>
                                            </View>
                                        } />
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </ScrollView>
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
});
export default Screen;
