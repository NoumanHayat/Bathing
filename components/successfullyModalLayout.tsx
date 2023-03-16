/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {COLORS, icons} from '../constants';
import FastImage from 'react-native-fast-image';

interface Props {
  children: ReactNode;
  onClose?: any;
}

export default function ModalLayout({onClose, children}: Props) {
  return (
    <View
      style={{flex: 1, backgroundColor: '#00000060', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#FFD4FF',
          margin: 10,
          padding: 20,
          borderRadius: 10,
        }}>
        {children}
      </View>
    </View>
  );
}
