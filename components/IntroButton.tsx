/* eslint-disable prettier/prettier */
import React from 'react';
import {TextStyle, View, ViewStyle, TouchableHighlight,Text} from 'react-native';
import AppText from './AppText';
import {COLORS,FONTS} from '../constants';
import FastImage, {ImageStyle} from 'react-native-fast-image';
interface Props {
  text: string;
  icon?: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ImageStyle;
}

export default function AppButton({
  text,
  icon,
  style,
  textStyle,
  iconStyle,
}: Props) {
  return (
    <View
      style={{
        overflow: 'hidden',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        ...style,
      }}>
      {/* <TouchableHighlight
        underlayColor={'#00000008'}
        onPress={() => {
          onPress();
        }}> */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 13,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 16, ...textStyle,fontFamily:FONTS.Normal ,color: COLORS.white}}>
            {text}
          </Text>
          
          {icon && (
            <FastImage
              source={icon}
              tintColor={COLORS.primary}
              style={{
                width: 12,
                height: 12,
                marginLeft: 10,
                ...iconStyle,
              }}
            />
          )}
        </View>
      {/* </TouchableHighlight> */}
    </View>
  );
}
