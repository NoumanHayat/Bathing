/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Dimensions, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, icons, FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import ModalLayout from '../../components/ModalLayout';
import { SelectList } from 'react-native-dropdown-select-list';
import AppButton from '../../components/AppButton';
import { RadioButton } from 'react-native-paper';

const Screen = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [status, setStatus] = useState('Male');
    const [visible, setVisible] = useState(false);
    const tablist = [
        { status: 'Male' },
        { status: 'Female' },
        { status: 'Other' },
    ];
    const data = [
        { key: '2', value: 'Item 1' },
        { key: '3', value: 'Item 2' },
        { key: '5', value: 'Item 3' },
        { key: '6', value: 'Item 4' },
    ];
    const [selected, setSelected] = useState('Relationship');
    const setStatusFilter = (status) => {
        setStatus(status);
    }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Halacha" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{ marginTop: 2 }}>
                        <Text style={{ color: '#252525', fontSize: 22, fontFamily:FONTS.Black }}>Halacha!</Text>
                    </View>
                    <View style={{ marginTop: 17 }}>
                        <Text style={{ color: COLORS.dark,fontSize:12 }}>Halakhic practice for Niddah, or female purity, is based on a harmonistic reading of Leviticus 12,15, 18, and 20. Taken from the Bible, the term niddah was transformed into a metaphorical expression for sin and impurity in general. During a woman’s period, any ritual objects she touches becomes impure, and those she comes into contact with become impure as well. The rabbinic period transformed the biblical practices and remade them into a new, normative Judaism. Among the rabbinic innovations include ritual purification through immersion, the evolution of Niddah into Zivah, retroactive and internal impurity, virginal blood, blood of desire, blood of purification after childbirth, and giving birth as a zava. In modern practices, different movements within Judaism take varying approaches to the laws of Niddah.</Text>
                    </View>
                    <View style={{ marginTop: 17 }}>
                        <Text style={{ color: COLORS.dark, fontSize: 22, fontFamily:FONTS.Black}}>Rabbinic Period and Normative Judaism</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ color: COLORS.dark }}>The rabbinic period transformed the biblical practices and remade them into a new, normative Judaism. The uncertainties about the text were clarified, generally by extending, transferring, or comparing the meaning in one verse to another by means of certain legal hermeneutical methods. Such transformation took place in all areas of biblical practice and many new legal issues developed at this time. The fact that this transformation took place in a period of strong Hellenistic influence, not only in terms of Mikvah practices but also in terms of the low status of women in that culture, is very significant. Several of the important innovations of the rabbinic period are mentioned below.</Text>
                    </View>
                    <View style={{marginTop: '5%' }}>
                        <TouchableOpacity>
                            <View style={{ flex: 1, alignItems: 'center', borderWidth: 4, borderColor: 'white', padding: 30, marginRight: 20,borderStyle:'dashed' }}>
                                <AntDesign name="upload" size={54} color="white" />
                                <Text style={{ color: COLORS.white,marginTop:5 }}>Upload Video</Text>
                            </View>
                        </TouchableOpacity>
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
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 20,
        marginBottom: 0,
    },
    listTab: {
        flexDirection: 'row',
        marginBottom: 20,
        alignSelf: 'center',
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        margin: 5,
        backgroundColor: COLORS.lightGray

    },
    textTab: {
        fontSize: 16
    },
    tnTabTextActive: {
        color: COLORS.white
    },
    tnTabActive: {
        backgroundColor: COLORS.dark
    },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
    dropdownBox: {

        flexDirection: 'row',
        // height: 40,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
        borderWidth: 0

    },
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 60,
        flex: 1,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 10,
    },
})
export default Screen;
