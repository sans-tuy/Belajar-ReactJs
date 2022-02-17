import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SvgImage from '../../assets/images/undraw_ideas_re_7twj.svg';

export default function ReactNativeSvg() {
  return (
    <View>
      <Text>ReactNativeSvg</Text>
      <SvgImage height={100} width={100} />
    </View>
  );
}

const styles = StyleSheet.create({});
