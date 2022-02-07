import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '../../component/Icon';
import Card from '../../component/Card';

export default function Communication() {
  const [Beli, setBeli] = useState(0);
  return (
    <View>
      <Icon notif={Beli} />
      <Card onClick={() => setBeli(Beli + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({});
