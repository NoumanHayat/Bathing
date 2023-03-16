/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/SmallButton';
import { Divider } from 'react-native-paper';
import ScreenHeader from '../../components/ScreenHader';
import AppInput from '../../components/AppInput';

const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} title={'Location'} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Location</Text>
                    <AppInput icon={<MaterialIcons name="location-on" size={24} color="black" />} defaultValue={"USA, California Street, San Francisco"} />

                </View>
                <View style={{ marginTop: '5%' }}>
                    <Image
                        //   style={{marginLeft:5}}
                        source={images.map}
                        resizeMode="contain"
                        style={{ width: '100%', height: 170 }}
                    />
                </View>
                <View style={{ marginTop: '3%', alignItems: 'flex-end' }}>
                    <AppButton
                        onPress={() => { navigation.push('Verification'); }}
                        text="Next"
                        style={{
                            width: '40%',
                        }}
                        icon={icons.line}
                        textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                    />
                </View>
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
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
})
export default Screen;
