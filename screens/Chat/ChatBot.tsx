/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, icons, COLORS, images } from '../../constants';
import ScreenHaderDashboard from '../../components/ScreenHaderDashboard';
import AppText from '../../components/AppText';

import { GiftedChat } from 'react-native-gifted-chat'


const ScreenHeader = ({ navigation, title, style }) => {
    return (
        <View
            style={{
                height: 55,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 45,
                ...style,
                // backgroundColor: COLORS.white,
            }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    source={icons.back}
                    style={{
                        tintColor: COLORS.dark,
                        height: 30,
                        width: 30,
                        position: 'absolute',
                    }}
                />
            </TouchableOpacity>
            <View
                style={{
                    alignItems: 'center',
                    marginLeft: -45,

                }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={images.Person} style={{ width: 50, height: 50, borderRadius: 360 }} />
                    </View>
                    <View>
                        <AppText
                            fontWeight="Bold"
                            style={{
                                color: COLORS.dark,
                                fontSize: 25,
                            }}>
                            Albert Flores
                        </AppText>
                        <AppText
                            fontWeight="Italic"
                            style={{
                                color: COLORS.dark,
                                fontSize: 12,
                            }}>
                            Active
                        </AppText>
                    </View>
                </View>
            </View>
            <View></View>
        </View>
    );
}
const Screen = ({ navigation }) => {
    const [messages, setMessages] = useState([{
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: 'My name is Nomi',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },]);
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader title="Chats" navigation={navigation} style={undefined} />
            <View style={styles.container}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    textProps={{ style: { color: 'black' } }}
                    textInputStyle={{ color: "black" }}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
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
