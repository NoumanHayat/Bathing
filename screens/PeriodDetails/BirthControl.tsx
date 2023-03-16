/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Text, Image, TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GRADIENTS, icons,FONTS } from '../../constants';
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
                        <Text style={{ color: COLORS.dark, fontSize: 20,fontFamily:FONTS.Black , textAlign: 'center' }}>Birth Control</Text>
                    </View>
                    <View style={{ margin: '10%',justifyContent:'center',alignItems:'center'}}>
                        <View style={styles.textBoxSign}>
                            <TextInput
                                placeholder="Condom"
                                placeholderTextColor={'white'}
                                //   onChangeText={(value) => setEmail(value)}
                                // keyboardType="numeric"
                                autoCapitalize={'none'}
                                style={{
                                    flex: 1,
                                    height: 'auto',
                                    fontSize: 20,
                                    marginLeft: 2,
                                    color: 'white',
                                    margin: 0,
                                    textAlign:'center'
                                }}
                            />
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLORS.dark, fontSize: 16, marginTop: "15%", fontWeight: 'bold' }}>Don’t Need</Text>
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
                        textStyle={{ color: COLORS.white, letterSpacing: 2 ,fontSize:16}}
                        onPress={()=>{navigation.navigate('LastPeriod')}}
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
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        // borderRadius: 5,
        borderColor:'white',
        borderRadius:4,
        borderWidth:2,
        // backgroundColor: COLORS.lightGray,
        // elevation: 2,
        marginTop: 20,
        marginBottom: 0,
        width:'40%'
    }
});
export default Screen;
