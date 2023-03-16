/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { TouchableNativeFeedback, View, TextInput } from 'react-native';
import AppText from './AppText';
import { COLORS, icons } from '../constants';
import FastImage from 'react-native-fast-image';


interface Props {
  placeholder?: string;
  placeholderColor?: string;
  backgroudColor?: string;
  onPress?: any;
  setSearch?: any;
  title: string;
}

export const SearchBar: FC<Props> = ({
  placeholder = 'Search',
  backgroudColor = COLORS.lightGray,
  placeholderColor = COLORS.primary,
  onPress,
  title,
  setSearch,
}) => {
  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
        shadowColor: "#0000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
      }}
    >
      <View
        style={{
          height: 29,
          backgroundColor: backgroudColor,
          // borderColor: COLORS.dark,
          borderWidth: 0,
          borderRadius: 3,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 18,
        }}
      >

        <TextInput
          placeholder={title ? title : "Search Doctor"}
          placeholderTextColor="gray"
          onChangeText={(value) => setSearch(value)}
          autoCapitalize={'none'}
          style={{
            flex: 1,
            height: 40.5,
            fontSize: 15,
            marginLeft: 2,
            color: 'black',
          }}
        />
        <FastImage
          source={icons.search}
          tintColor={COLORS.dark}
          style={{
            width: 18,
            height: 18,
            marginRight: 15
          }}
        />
      </View>
    </View>
  );
};
