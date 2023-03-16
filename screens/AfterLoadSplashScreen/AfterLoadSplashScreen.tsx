/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, values, images, GRADIENTS } from '../../constants';
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import AppText from '../../components/AppText';
import LinearGradient from 'react-native-linear-gradient';
import styles from './AfterLoadSplashScreen.styles';
import IntroButton from '../../components/IntroButton';
const slides: {
  key: string;
  title: string;
  text: string;
  image: Source;
  backgroundColor: string;
  screen: number;
}[] = [
    {
      key: 'one',
      title: 'Got an Idea',
      text: 'Do you have a great business idea?\n\nAnd you do not have money? Then you are at the right place ',
      image: images.introBath,
      screen: 1,
      backgroundColor: COLORS.primaryOne,
    },
    {
      key: 'two',
      title: 'Look for investor?',
      text: 'Here you can share your idea and look for investor.\n\n You can get bids for a great business idea and work with most suitable ',
      image: images.introBath,
      screen: 2,
      backgroundColor: COLORS.primaryOne,
    },
  ];

type AfterLoadSplashScreenProps = { onGetStarted: () => void };
const AfterLoadSplashScreen = ({
  onGetStarted,
}: AfterLoadSplashScreenProps): JSX.Element => {
  const renderStep = ({ item }: { item: typeof slides[number] }): JSX.Element => {
    return (
      <LinearGradient
        style={styles.containerGradient}
        useAngle={true}
        angle={180}
        colors={GRADIENTS.backgroundColor}>
        <View style={styles.mainView}>
          <StatusBar backgroundColor={COLORS.dark} />
          {item.screen == 1 ? (
            <View style={styles.itemsCentered}>
              <View
                style={{
                  flex: 0.35,
                  // justifyContent: 'center',
                  // marginLeft: 10,
                  // backgroundColor: 'red',
                  // alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'center',
                    marginLeft: 10,
                    // alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      return true;
                    }}>
                    <AppText style={styles.skipText} fontWeight="SemiBold">
                      Skip
                    </AppText>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.85, marginLeft: 10 }}>
                  {/* <AppText style={styles.title} fontWeight="SemiBold">
                Book
              </AppText> */}
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 20,
                      fontFamily: 'Mulish',
                      padding: 5,
                      // fontWeight: 'bold',
                    }}>
                    Book
                  </Text>
                  {/* <AppText style={styles.title} fontWeight="SemiBold">
                Bath House
              </AppText> */}
                  {/* <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text
                      style={{
                        color: COLORS.black,
                        fontSize: 22,
                        fontFamily: 'Mulish',
                        fontWeight: 'bold',
                        padding: 5,
                      }}>
                      Bath
                    </Text>
                    <Text
                      style={{
                        color: COLORS.black,
                        fontSize: 20,
                        fontFamily: 'Mulish',

                        // marginLeft: 10,
                        // marginLeft: 3,
                        // fontWeight: 'bold',
                      }}>
                      House
                    </Text>
                  </View> */}
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 30,
                      fontFamily: 'Mulish',
                      fontWeight: 'bold',
                      padding: 5,
                    }}>
                    a
                  </Text>
                  {/* <AppText style={styles.title} fontWeight="Bold">
                with
              </AppText> */}
                  {/* <AppText style={styles.title} fontWeight="SemiBold">
                Bathing
              </AppText> */}
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 22,
                      fontFamily: 'Mulish',
                      fontWeight: 'bold',
                      padding: 5,
                    }}>
                    Mikvah
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0.65, alignItems: 'flex-end' }}>
                <Image style={styles.imageSize} source={images.introBath} />
              </View>
            </View>
          ) : (
            <View style={styles.itemsCentered}>
              <View
                style={{
                  flex: 0.35,
                  // justifyContent: 'center',
                  // backgroundColor: 'red',
                  // alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 0.15,
                     justifyContent: 'center',
                    // alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      return true;
                    }}>
                    <AppText style={styles.skipText} fontWeight="SemiBold">
                      Skip
                    </AppText>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 0.85, marginLeft: 10 }}>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 22,
                      fontFamily: 'Mulish',
                      padding: 5,
                      fontWeight: 'bold',
                    }}>
                    Track
                  </Text>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 22,
                      fontFamily: 'Mulish',
                      fontWeight: 'bold',
                      padding: 5,
                    }}>
                    Your
                  </Text>
                  {/* <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 22,
                      fontFamily: 'Mulish',
                      fontWeight: 'bold',
                      padding: 5,
                    }}>
                    Period
                  </Text> */}
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 22,
                      fontFamily: 'Mulish',
                      padding: 5,
                    }}>
                    Cycle
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0.65, alignItems: 'flex-end' }}>
                <Image style={styles.imageSize} source={images.getStarted} />
              </View>
            </View>
          )}

          {/* <FastImage source={item.image} style={styles.imageSize} /> */}
          {/* 
          <View style={styles.sliderContainer}>
            {slides.map((s) => (
              <View
                key={`slide_mark_${s.key}`}
                style={{
                  flex: s.key === item.key ? 2 : 1,
                  backgroundColor: s.key === item.key ? COLORS.white : COLORS.gray,
                  marginHorizontal: 2,
                  height: 7,
                  borderRadius: 5
                }}
              />
            ))}
          </View>
          <AppText style={styles.title} fontWeight="SemiBold">
            {item.title}
          </AppText>
          <AppText style={styles.text}>{item.text}</AppText> */}
          {/* </View> */}
        </View>
      </LinearGradient>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderStep}
      data={slides}
      onDone={onGetStarted}
      bottomButton={true}
      renderNextButton={() => {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <IntroButton
              text="Next"
              style={{
                backgroundColor: COLORS.dark,
                width: '90%',
                marginTop: 0,
              }}
              textStyle={{ color: COLORS.white, letterSpacing: 2 }}
            />
          </View>
        );
      }}
      renderDoneButton={() => {
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <IntroButton
              text="Get Started"
              style={{
                backgroundColor: COLORS.dark,
                width: '90%',
                marginTop: 0,
              }}
              textStyle={{ color: COLORS.white, letterSpacing: 2 }}
            // onPress={undefined}
            />
          </View>
        );
      }}
    />
  );
};

export default AfterLoadSplashScreen;