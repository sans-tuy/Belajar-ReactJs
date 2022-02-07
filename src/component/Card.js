import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import stadion from '../assets/images/stadion.jpg';

const Card = props => {
  return (
    <View style={styles.card}>
      <Image source={stadion} style={styles.image} />
      <Text style={styles.title}>New Mackbook pro 2019</Text>
      <Text style={styles.price}>Rp. 25.000.000,-</Text>
      <Text style={styles.city}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onClick}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#f7f1e3',
    width: 212,
    padding: 12,
    margin: 12,
    borderRadius: 8,
  },
  image: {
    width: 188,
    height: 187,
    borderRadius: 8,
  },
  price: {
    color: '#e17055',
    paddingTop: 10,
  },
  city: {
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#3ae374',
    borderRadius: 8,
    marginTop: 10,
    padding: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default Card;
