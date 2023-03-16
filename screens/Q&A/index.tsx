/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS, images, FONTS } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Title } from 'react-native-paper';
// import {AppCardButton} from '../../components/AppCardButton';

const Screen = ({ navigation }) => {
    const [status, setStatus] = useState('All');

    const tablist = [
        { status: 'All' },
        { status: 'Get Started' },
        { status: 'Ordering and Payments' },
        { status: 'Mikvah' },
    ];
    const Data = [
        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Get Started' },
        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Get Started' },

        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Get Started' },
        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Get Started' },

        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Ordering and Payments' },

        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Ordering and Payments' },
        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Ordering and Payments' },
        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Mikvah' },
        { title: 'What Is Halacha?', description: 'tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ibortis.Lorem ipsum dolor sit amet, consectetur.', status: 'Mikvah' },

    ];
    const [dataList, setDataList] = useState(Data);
    const [open, setOpen] = useState(false);
    const setStatusFilter = (status) => {
        setStatus(status);
        if(status=='All'){
            setDataList(Data);
        }else{
            setDataList([...Data.filter(e => e.status === status)]);
        }
        

    }

    const RenderCard = ({ item, index }) => {
        console.log(index);
        return (
            <View style={styles.centeredView}>
                <View style={[styles.modalView,open==true && styles.openCard]}>
                    <View>
                        <View style={{ padding: 2, paddingLeft: 5, paddingRight: 5 }}>
                            <TouchableOpacity onPress={()=>{setOpen(!open)}}>
                                <View style={styles.title}>
                                    <Text style={[styles.textStyle,open==true && styles.openText]}>{index+1}. {item.title}</Text>
                                    <AntDesign name="down" size={11}  color={open==true?'white':'black'}/>
                                </View>
                            </TouchableOpacity>
                            {open?(<View style={styles.description}>
                                <Text style={[styles.descriptionTextStyle,open==true && styles.openText]}>{item.description}</Text>
                            </View>):null}
                            
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHaderDashboard title="Q&A" navigation={navigation} onlyBack={true} />
            <SafeAreaView style={styles.container}>
                <View >
                    <ScrollView horizontal style={styles.listTab}>
                        {
                            tablist.map((tab) => {
                                return (
                                    <TouchableOpacity key={tab.status} style={[styles.btnTab, tab.status === status && styles.tnTabActive]}
                                        onPress={() => { setStatusFilter(tab.status); }}>
                                        <Text style={[styles.textTab, tab.status === status && styles.tnTabTextActive]}>{tab.status}</Text>
                                    </TouchableOpacity>)
                            })
                        }
                    </ScrollView>
                </View>
                <FlatList
                    data={dataList}
                    // keyExtractor={({ item, index }) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index}>
                                <RenderCard item={item} index={index} />
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    // =============================================================
    descriptionTextStyle:{ color: COLORS.dark, fontSize: 10,fontFamily:FONTS.Normal},
    openText:{color: 'white'},
    textStyle:{ color: COLORS.dark, fontSize: 12,fontFamily:FONTS.Normal },
    openCard:{backgroundColor:'#3D2645'},
    description:{
        marginTop:10,
        width:232
    },
    title: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5, marginTop: 5, },
    modalView: {
        width: "100%",
        margin: 5,
        backgroundColor: "white",
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    listTab: {
        flexDirection: 'row',
        marginBottom: 26,
        // alignSelf: 'center',
        // justifyContent:'center',
    },
    btnTab: {
        // width: Dimensions.get('window').width / 3.5,
        height: 31,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#3D2645',
        justifyContent: 'center',
        marginLeft: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius:3,
        // backgroundColor: '#FFFFFF',
        alignItems:'center',

    },

    textTab: {
        fontSize: 10,
        color:'black'
    },
    tnTabActive: {
        backgroundColor: COLORS.dark
    },
    tnTabTextActive: {
        color: COLORS.white
    }
});
export default Screen;
