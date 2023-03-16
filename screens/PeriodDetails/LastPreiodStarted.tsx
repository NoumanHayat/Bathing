/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GRADIENTS, icons, FONTS } from '../../constants';
import IntroButton from '../../components/AppButton';

const Screen = ({ navigation }) => {
    const [values, setValue] = useState(15);
    return (
        <LinearGradient
            style={styles.containerGradient}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <View style={styles.mainView}>
                <StatusBar backgroundColor={COLORS.dark} />
                <View style={styles.itemsCentered}>
                    <View style={{ margin: '10%' }}>
                        <Text style={{ color: COLORS.dark, fontSize: 17, fontFamily: FONTS.Bold, textAlign: 'center' }}>When Your Last Period Started</Text>
                    </View>
                    <View style={{ margin: '10%' }}>
                        <Text style={{ color: COLORS.dark, fontSize: 20, textAlign: 'center',fontFamily:FONTS.Medium }}>November</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30 }}>
                        <View style={{ justifyContent: 'flex-end',padding:3 }}>
                            <TouchableOpacity onPress={() => { setValue(values + 1) }}>
                                <Image source={icons.back} style={{ width: 6, height: 12 }} />
                            </TouchableOpacity>
                        </View>
                        
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>Mn</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 26 }}>{(values + 0) % 31}</Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>Tu</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 26 }}>{(values + 1) % 31}</Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>Wr</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 26 }}>{(values + 2) % 31}</Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>tr</Text>
                            <Text style={{ color: COLORS.dark, marginTop: 26 }}>{(values + 3) % 31}</Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>Fr</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 26 }}>{(values + 4) % 31}</Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>Sa</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 26 }}>{(values + 5) % 31}</Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontFamily: FONTS.Normal, fontSize: 16 }}>Su</Text>
                            <Text style={{ color: COLORS.gray, marginTop: 26 }}>{(values + 6) % 31}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-end',padding:3 }}>
                            <TouchableOpacity onPress={() => { setValue(values + 1) }}>
                                <Image source={icons.right_arrow} style={{ width: 6, height: 12 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.dark, fontSize: 13, marginTop: "15%", fontFamily:FONTS.Black }}>I Can’t Remember</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                    <IntroButton
                        text="Next"
                        style={{
                            backgroundColor: COLORS.dark,
                            width: '90%',
                            marginTop: 0,
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2,fontSize:16  }}
                        onPress={() => { navigation.navigate('HowlongisyourCycle') }}
                    />
                </View>

            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    containerGradient: { flex: 1 },
    mainView: { flex: 1 },
    itemsCentered: {
        // flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:COLORS.green
    },
    imageSize: {
        width: '100%',
        height: '74%',
        resizeMode: 'contain',
        margin: 0,
        marginTop: 0,
        marginRight: 1,
    },
    sliderContainer: { flexDirection: 'row', marginTop: 30 },
    title: { color: COLORS.black, fontSize: 24, fontFamily: 'Mulish' },
    text: {
        color: COLORS.white,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
    skipText: {
        color: COLORS.gray,
    },
});
export default Screen;
