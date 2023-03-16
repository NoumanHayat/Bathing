/* eslint-disable prettier/prettier */
import React from 'react';
import {TextStyle, View, ViewStyle, TouchableHighlight} from 'react-native';
import AppText from './AppText';
import {COLORS} from '../constants';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
interface Props {
  text: string;
  icon?: any;
  onPress: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ImageStyle;
}

export default function AppButton({
  text,
  icon,
  onPress,
  style,
  textStyle,
  iconStyle,
}: Props) {
  return (
    <View
      style={{
        overflow: 'hidden',
        backgroundColor: COLORS.dark,
        borderRadius: 5,
        ...style,
      }}>
      <TouchableHighlight
        underlayColor={'#00000008'}
        onPress={() => {
          onPress();
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 5,
            paddingVertical: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            fontWeight="Medium"
            style={{color: COLORS.white, fontSize: 14, ...textStyle}}>
            {text}
          </AppText>
          {icon && (
           <Feather name="arrow-right" size={18} color="white" />
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
}
