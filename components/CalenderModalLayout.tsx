/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { COLORS, icons } from '../constants';
import FastImage from 'react-native-fast-image';

interface Props {
  children: ReactNode;
  onClose?: any;
}

export default function ModalLayout({ onClose, children }: Props) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          marginBottom: 12,
          paddingTop: 18,
          paddingRight: 39,
          borderRadius: 10,
        }}>
         <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
            style={{
              width: 16,
              height: 16,
              backgroundColor: 'rgba(61, 38, 69, 0.2)',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FastImage
              source={icons.close}
              tintColor={COLORS.black}
              style={{
                width: 5.4,
                height: 5.4,
              }}
            />
          </TouchableOpacity>
        </View> 
        {children}
      </View>
    </View>
  );
}
