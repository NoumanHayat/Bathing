/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import { View, Dimensions } from 'react-native';
import AppText from './AppText';
import { COLORS } from '../constants';

interface Props {
  leftContent?: ReactNode;
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  style?: any;
  active?: boolean;
}

export default function HalfCard({ children, style, active }: Props) {
  let deviceWidth = Dimensions.get('window').width;

  return !active ? (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        height: 'auto',
        width: deviceWidth / 2.3,
        margin: 2,
        ...style,
      }}>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  ) : (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#3D2645',
        borderRadius: 12,
        height: 'auto',
        width: deviceWidth / 2.3,
        margin: 2,
        ...style,
      }}>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
