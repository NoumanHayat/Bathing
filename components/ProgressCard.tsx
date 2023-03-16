/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import LinearGradient from 'react-native-linear-gradient';
import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
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
    return (

        <View style={{
            flex: 1,
            overflow: 'hidden',
            borderRadius:15
        }} >
            <LinearGradient
                style={{ flex: 1 }}
                useAngle={true}
                angle={90}
                start={{x: 0.5, y: 0/5}} end={{x: 1, y: 0.5}} 
                // linear-gradient(103.79deg, #3D2645 -19.71%, #FFFFFF 166.67%)
                colors={['#3D2645','#66556C', '#8A838D']}>
                <View style={{
                    flexDirection: 'row',
                    padding: 20,
                    flex: 1,
                }} >
                    <View style={{ flex: 1 }}>
                        <View>{leftContent}</View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
                        <View>{rightContent}</View>
                    </View>

                </View>
            </LinearGradient>
        </View>
    );
}
