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
import AppInput from '../../components/AppInput';

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
            <ScreenHaderDashboard title="Personal Information" navigation={navigation} onlyBack={true} />
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: FONTS.Black }}>Personal Information</Text>
                    </View>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            inputStyles={{ color: 'gray' }}
                            dropdownTextStyles={{ color: 'gray' }}
                            boxStyles={styles.dropdownBox}
                            save="value"
                            search={false}
                            searchPlaceholder={'Martial Status'}
                            placeholder="Martial Status"
                            arrowicon={<View >
                                <Feather name="chevron-down" size={24} color="black" />
                            </View>
                            }
                        />
                    </View>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            inputStyles={{ color: 'gray' }}
                            dropdownTextStyles={{ color: 'gray' }}
                            boxStyles={styles.dropdownBox}
                            save="value"
                            search={false}
                            placeholder="Blood Group"
                            arrowicon={<View >
                                <Feather name="chevron-down" size={24} color="black" />
                            </View>
                            }
                        />
                    </View>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            inputStyles={{ color: 'gray' }}
                            dropdownTextStyles={{ color: 'gray' }}
                            boxStyles={styles.dropdownBox}
                            save="value"
                            search={false}
                            placeholder="Alcoholic"
                            arrowicon={<View >
                                <Feather name="chevron-down" size={24} color="black" />
                            </View>
                            }
                        />
                    </View>
                    <View>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            inputStyles={{ color: 'gray' }}
                            dropdownTextStyles={{ color: 'gray' }}
                            boxStyles={styles.dropdownBox}
                            save="value"
                            search={false}
                            placeholder="Normal Temperature "
                            arrowicon={<View >
                                <Feather name="chevron-down" size={24} color="black" />
                            </View>
                            }
                        />
                    </View>


                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 32 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: COLORS.dark, fontSize: 15 }}>Height</Text>
                            <View style={{ marginRight: 5 }}>
                                <AppInput icon={null} defaultValue={"Cm"} />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: COLORS.dark, fontSize: 15 }}>Weight</Text>
                            <View style={{ marginLeft: 5 }}>
                                <AppInput icon={null} defaultValue={"Kgs"} />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 49, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: COLORS.dark, fontSize: 15, fontFamily: FONTS.Normal }}>Smoker</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: COLORS.dark, fontSize: 10 }}>Yes</Text>
                                <RadioButton
                                    value="Yes"
                                    color='#3D2645'
                                    status={checked === 'Yes' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Yes')}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: COLORS.dark, fontSize: 10 }}>No</Text>
                                    <RadioButton
                                        value="No"
                                        color='#3D2645'

                                        status={checked === 'No' ? 'checked' : 'unchecked'}
                                        onPress={() => setChecked('No')}
                                    />
                                
                            </View>
                        </View>
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
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: COLORS.white,
        marginBottom: 0,
        borderWidth: 0,

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
