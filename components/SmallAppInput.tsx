/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {ReactNode} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextStyle,
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
// 'Feather.ttf','Entypo.ttf','FontAwesome5.ttf','.ttf','FontAwesome5.ttf'
interface Props {
  value?: string | undefined;
  defaultValue?: string | undefined;
  style?: TextStyle;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export default function AppInput({
  value,
  defaultValue,
  onChange,
  style,
  onChangeText,
  icon,
}: Props) {
  return (
    <View style={styles.textBoxSign}>
      <View style={styles.icons}>{icon}</View>
      <TextInput
        placeholder={defaultValue}
        placeholderTextColor="gray"
        autoCapitalize={'none'}
        style={{
          flex: 1,
          height: 'auto',
          fontSize: 10,
          marginLeft: 2,
          color: 'gray',
          paddingBottom: 7,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  icons: {
    flex: 0.1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  textBoxSign: {
    flexDirection: 'row',
    height: 50,
    // backgroundColor:'blue',
    // marginHorizontal: 5,
    // paddingHorizontal: SIZES.radius,
    borderRadius: 5,
    // elevation: 2,
    marginTop: 20,
    backgroundColor: COLORS.white,
    marginBottom: 0,
  },
});
