/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, icons,images,FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import AppButton from '../../components/AppButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CustomCard = () => {
    return (
        <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
            <View>
                <Image source={images.Person} style={{width:33, height: 33,borderRadius:50 }} />
            </View>
            <View style={{marginLeft:14}}>
                <Text style={{color:COLORS.dark,fontSize:14,fontFamily:FONTS.Normal}}><Text style={{fontFamily:FONTS.Black}}>Albert Flores</Text> Followed you.</Text>
                <Text style={{color:'#95B0B1',fontFamily:FONTS.Normal,fontSize:8}}>Just Now</Text>
            </View>
        </View>

    )
}
const Screen = ({ navigation }) => {
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Notification" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{ marginBottom: 26 }}>
                        <Text style={{  color: '#95B0B1',fontFamily:FONTS.Normal }}>Today</Text>
                    </View>
                    <View style={{marginTop:0}}>
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                    </View>
                    <View style={{ marginBottom: 29,marginTop:29 }}>
                        <Text style={{ color: '#95B0B1',fontFamily:FONTS.Normal }}>20 September 2022</Text>
                    </View>
                    <View style={{marginTop:3}}>
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
})
export default Screen;
