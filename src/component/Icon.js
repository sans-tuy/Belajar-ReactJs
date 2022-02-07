import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../assets/icon/cart.png';

export default function Icon(props) {
  return (
    <View style={styles.icon}>
      <Text style={styles.titleMateri}>Materi position</Text>
      <View style={styles.wrapIcon}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.notif}</Text>
      </View>
      <Text style={styles.iconTitle}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconCart: {
    width: 60,
    height: 60,
  },
  wrapIcon: {
    borderColor: 'blue',
    borderWidth: 1,
    width: 90,
    height: 90,
    marginTop: 20,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    alignItems: 'center',
    marginTop: 20,
  },
  notif: {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 25,
    width: 24,
    height: 24,
    fontSize: 12,
    position: 'absolute',
    top: 10,
    right: 0,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  iconTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  titleMateri: {
    fontSize: 20,
  },
});
