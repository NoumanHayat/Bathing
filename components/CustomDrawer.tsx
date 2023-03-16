/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,

} from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';
import { images, GRADIENTS, COLORS, SIZES, icons } from '../constants';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{}}>

        <View style={{ margin: 10 }}>
          <TouchableOpacity onPress={() => { props.navigation.closeDrawer() }}>
            {/* <FastImage source={icons.menu} style={{ width: 20, height: 20}} /> */}
            {/* <Image
              style={{
                width: 24,
                height: 24,
                backgroundColor:'white'
              }}
              source={icons.menuWhite}
            /> */}
            <Entypo name="cross" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 15 }}>
          <View style={{ margin: 10, marginTop: '10%' }}>

            <FastImage source={images.Person} style={{ width: 70, height: 70 }} />

            <Text style={{ color: COLORS.white, marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Emma</Text>
            <Text style={{ color: COLORS.gray, marginTop: 5, fontSize: 12 }}>Work hard in silence. Let your success be the noise</Text>
          </View>
          <View style={{ flex: 1, paddingTop: 10 }}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
