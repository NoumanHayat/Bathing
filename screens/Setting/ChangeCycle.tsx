// /* eslint-disable react/self-closing-comp */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable prettier/prettier */
// import React, { useState } from 'react';
// import { View, StatusBar, StyleSheet, Text, Image, TextInput,TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { COLORS, GRADIENTS, icons, } from '../../constants';
// import IntroButton from '../../components/AppButton';

// const Screen = ({ navigation }) => {
//     const [values, setValue] = useState(15);
//     return (
//         <LinearGradient
//             style={styles.containerGradient}
//             useAngle={true}
//             angle={180}
//             colors={GRADIENTS.backgroundColor}>
//             <View style={styles.mainView}>
//                 <StatusBar backgroundColor={COLORS.dark} />
//                 <View style={styles.itemsCentered}>
//                     <View style={{ margin: '10%' }}>
//                         <Text style={{ color: COLORS.dark, fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>How long is your Cycle?</Text>
//                     </View>
//                     <View style={{ margin: '10%', justifyContent: 'center', alignItems: 'center' }}>
//                         <View style={styles.textBoxSign}>
//                             <TextInput
//                                 placeholder="30"
//                                 placeholderTextColor={'gray'}
//                                 //   onChangeText={(value) => setEmail(value)}
//                                 keyboardType="numeric"
//                                 autoCapitalize={'none'}
//                                 style={{
//                                     flex: 1,
//                                     height: 40.5,
//                                     fontSize: 12,
//                                     marginLeft: 2,
//                                     color: 'gray',
//                                     margin: 10,
//                                     textAlign: 'center'
//                                 }}
//                             />
//                         </View>
//                     </View>

// <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//     <TouchableOpacity  onPress={() => { navigation.navigate('ChangeCycleTime') }}>
//         <Text style={{ color: COLORS.dark, fontSize: 16, marginTop: "15%", fontWeight: 'bold' }}>Change Period Time</Text>
//     </TouchableOpacity>
// </View>
//                 </View>
//                 <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
//                     <IntroButton
//                         text="Change"
//                         style={{
//                             backgroundColor: COLORS.dark,
//                             width: '90%',
//                             marginTop: 0,
//                         }}
//                         textStyle={{ color: COLORS.white, letterSpacing: 2 }}
//                         onPress={() => { alert('Working') }}
//                     />
//                 </View>

//             </View>
//         </LinearGradient>
//     );
// };
// const styles = StyleSheet.create({
//     containerGradient: { flex: 1 },
//     mainView: { flex: 1 },
//     itemsCentered: {
//         // flexDirection: 'row',
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor:COLORS.green
//     },
//     imageSize: {
//         width: '100%',
//         height: '74%',
//         resizeMode: 'contain',
//         margin: 0,
//         marginTop: 0,
//         marginRight: 1,
//     },
//     sliderContainer: { flexDirection: 'row', marginTop: 30 },
//     title: { color: COLORS.black, fontSize: 24, fontFamily: 'Mulish' },
//     text: {
//         color: COLORS.white,
//         fontSize: 14,
//         textAlign: 'center',
//         marginTop: 20,
//     },
//     skipText: {
//         color: COLORS.gray,
//     },
//     textBoxSign: {
//         flexDirection: 'row',
//         height: 60,
//         // marginHorizontal: 5,
//         // paddingHorizontal: SIZES.radius,
//         borderRadius: 5,
//         backgroundColor: COLORS.lightGray,
//         elevation: 2,
//         marginTop: 20,
//         marginBottom: 0,
//         width: '40%'
//     }
// });
// export default Screen;

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GRADIENTS, icons, FONTS } from '../../constants';
import IntroButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Screen = ({ navigation }) => {
    const [values, setValue] = useState(15);
    return (
        <LinearGradient
            style={styles.containerGradient}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <KeyboardAwareScrollView>
                <View style={styles.mainView}>
                    <StatusBar backgroundColor={COLORS.dark} />
                    <View style={styles.itemsCentered}>
                        <View style={{ marginTop: 284 }}>
                            <Text style={{ color: COLORS.dark, fontSize: 20, fontFamily: FONTS.Black, textAlign: 'center' }}>How long is your Cycle?</Text>
                        </View>
                        <View style={{ marginTop: 57, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder="30"
                                    placeholderTextColor={'white'}

                                    //   onChangeText={(value) => setEmail(value)}
                                    keyboardType="numeric"
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 'auto',
                                        fontSize: 20,
                                        marginLeft: 2,
                                        color: 'white',
                                        margin: 0,
                                        textAlign: 'center',


                                    }}
                                />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('ChangeCycleTime') }}>
                                <Text style={{ color: COLORS.dark, fontSize: 16, marginTop: 95, fontWeight: 'bold' }}>Change Period Time</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                        <IntroButton
                            text="Next"
                            style={{
                                backgroundColor: COLORS.dark,
                                width: '90%',
                                marginTop: 0,
                            }}
                            textStyle={{ color: COLORS.white, letterSpacing: 2, fontSize: 16 }}
                            onPress={() => { alert('Ok') }}
                        />
                    </View>

                </View>
            </KeyboardAwareScrollView>
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
        borderRadius: 5,
        borderColor: COLORS.white,
        borderWidth: 2,
        // backgroundColor: null,
        // elevation: 2,
        marginTop: 20,
        marginBottom: 0,
        width: '40%'
    }
});
export default Screen;
