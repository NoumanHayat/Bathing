/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  Platform,
  ViewStyle,
  StyleSheet,
} from 'react-native';
// import useTheme from '../hooks/useTheme';

const Switch = ({
  id = 'Switch',
  checked = false,
  thumbColor = 'white',
  activeFillColor,
  inactiveFillColor,
  duration = 250,
  thumbStyle,
  switchStyle,
  style,
  onPress,
  haptic = true,
  ...props
}) => {
  const [isChecked, setChecked] = useState(checked);
  // const {colors, sizes} = useTheme();
  const activeColor = activeFillColor || '#3A416F';
  const inactiveColor = inactiveFillColor || '#E9ECEF';

  const animation = useRef(new Animated.Value(isChecked ? 28 : 2)).current;

  const handleToggle = useCallback(() => {
    setChecked(!isChecked);
    onPress?.(!isChecked);

    /* haptic feedback onPress */

  }, [isChecked, setChecked, onPress]);

  useEffect(() => {
    Animated.timing(animation, {
      duration,
      useNativeDriver: false,
      toValue: isChecked ? 28 : 2,
    }).start();
  }, [isChecked, animation, duration]);

  /* update local state for isChecked when checked prop is updated */
  useEffect(() => {
    if (isChecked !== checked) {
      setChecked(checked);
    }
  }, [isChecked, checked]);

  const bgColor = animation.interpolate({
    inputRange: [2, 28],
    outputRange: [String(inactiveColor), String(activeColor)],
  });

  const switchStyles = StyleSheet.flatten([
    {
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: bgColor,
      height: 20,
      //change here
    },
    switchStyle,
  ]) as ViewStyle;

  const thumbStyles = StyleSheet.flatten([
    thumbStyle,
    {
      width: 20,
      height: 20,
      backgroundColor: thumbColor,
      shadowColor: '#FFFFFF',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.07,
      shadowRadius: 4,
      elevation: 2,
      borderRadius: 20 / 2,
      transform: [{ translateX: animation }],
    },
  ]) as ViewStyle;

  const containerStyles = StyleSheet.flatten([
    style,
    {
      overflow: 'hidden',
      width: 32,
      height: 20,
      borderRadius: 24,
    },
  ]) as ViewStyle;

  // generate component testID or accessibilityLabel based on Platform.OS
  const switchID =
    Platform.OS === 'android' ? { accessibilityLabel: id } : { testID: id };

  return (
    <Pressable
      {...switchID}
      // hitSlop={sizes.s}
      onPress={handleToggle}
      style={containerStyles}
      {...props}>
      <Animated.View style={switchStyles}>
        <Animated.View style={thumbStyles} />
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(Switch);
