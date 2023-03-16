/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { registerCustomIconType } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/SmallButton';
import { Divider } from 'react-native-paper';
import ScreenHeader from '../../components/ScreenHader';
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} title={'Guidelines'} />
            {/* <ScrollView> */}
                <View style={styles.container}>
                    <View style={{ flex: 0.9 }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.dark }}>Hi! Emma</Text>
                        </View>
                        <View style={{ marginTop: "10%" }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.dark }}>Agree with policy</Text>
                            <Text style={{ color: COLORS.dark, fontSize: 10 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class ptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac we honcus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum wf tellus.urabitur tempor quis eros tempus lacinia. Nam bibendum we pellentesque quam a convallis. Lorem ipsum dolor sit amet, bibend consectetur adipiscing elit. Etiam eu turpis molestie, dictum est are mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget est condimentum velit, sit amet feugiat lectus. Class ptent taciti eget  et stsociosqu ad litora torquent per conubia nostra, per inceptos ege et himenaeos. Praesent auctor purus luctus enim egestas, ac eget are scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac we honcus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum wf tellus.urabitur tempor quis eros tempus lacinia. Nam bibendum we pellentesque quam a convallis. </Text>

                        </View>

                    </View>
                    <View style={{ flex: 0.1 }}>
                        <View style={{ marginTop: '3%', alignItems: 'flex-end' }}>
                            <AppButton
                                onPress={() => { navigation.push('DashboardNavigator') }}
                                text="Agree & Continue"
                                style={{
                                    // width: '60%',
                                    // margin: 10,
                                     paddingLeft:25,
                                     paddingRight:25,
                                    
                                }}
                                textStyle={{ color: COLORS.white, letterSpacing: 2,fontSize:12}}
                            />
                        </View>
                    </View>
                </View>
            {/* </ScrollView> */}
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 55,
        marginTop: 0,
        flex: 1,
    },
})
export default Screen;
