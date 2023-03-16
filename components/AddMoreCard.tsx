/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import LinearGradient from 'react-native-linear-gradient';
import React, { ReactNode } from 'react';
import { View, Text,Dimensions } from 'react-native';
import AppText from './AppText';
import { COLORS } from '../constants';

interface Props {
    leftContent?: ReactNode;
    children?: ReactNode;
    title?: string;
    subtitle?: string;
    rightContent?: ReactNode;
}

export default function ProgressCard({
    title,
    subtitle,
    leftContent,
    children,
    rightContent,
}: Props) {
    let deviceWidth = Dimensions.get('window').width;

    return (

        <View style={{
            flex: 1,
            overflow: 'hidden',
            borderRadius:15,
            width: deviceWidth / 2.3,
            backgroundColor: '#FFFFFF',
            opacity: .5
            
        }} >
                <View style={{
                    flexDirection: 'row',
                    padding: 20,
                    flex: 1,
                }} >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
                        <View>{children}</View>
                    </View>

                </View>
        </View>
    );
}
