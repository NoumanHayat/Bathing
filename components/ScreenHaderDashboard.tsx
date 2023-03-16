/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { COLORS, FONTS, icons } from '../constants';
import AppText from './AppText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// var onlyBack = true;
export default function ScreenHeader({
  navigation,
  onlyBack = false,
  title = '',
  // Available,
}) {
  return (
    <View>
      {!onlyBack ? (
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 15,
            // backgroundColor: COLORS.white,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
            style={{
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.menu}
              style={{
                tintColor: COLORS.dark,
                height: 18,
                width: 27,
                position: 'absolute',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              marginLeft: -45,
            }}>
            <Text
              style={{
                color: COLORS.dark,
                fontSize: 20,
                fontFamily: FONTS.Normal,
              }}>
              Emma
            </Text>
            <Text
              style={{
                color: COLORS.darkgray,
                fontSize: 8,
                alignSelf: 'center',
                fontFamily: FONTS.Normal,
              }}>
              <Ionicons name="location-outline" size={8} color="gray" />
              California
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Chatnavigation');
            }}
            style={{
              height: 45,
              width: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="facebook-messenger"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            height: 35,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 15,
            // ...style,
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
                height: 21,
                width: 11,
                position: 'absolute',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              marginLeft: -45,
            }}>
            <Text
              style={{
                color: COLORS.dark,
                fontSize: 20,
                fontFamily: FONTS.Black,
              }}>
              {title}
            </Text>
          </View>
          <View></View>
        </View>
      )}
    </View>
  );
}
