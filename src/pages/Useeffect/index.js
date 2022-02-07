import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Useeffect() {
  const [subscriber, setsubscriber] = useState(100);

  useEffect(() => {
    console.log('did Mount');
    setTimeout(() => {
      setsubscriber(subscriber + 100);
    }, 2000);
    return () => {
      console.log('did Update');
    };
  }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          // align berfungsi mengatur posisi secara vertikal atau sumbu y
          alignItems: 'center',
          // justify berfungsi mengatur posisi secara horizontal atau sumbu x
          justifyContent: 'space-around',
        }}>
        <View style={{backgroundColor: 'red', width: 125, height: 50}}></View>
        <View style={{backgroundColor: 'blue', width: 50, height: 100}}></View>
        <View style={{backgroundColor: 'green', width: 50, height: 150}}></View>
        <View style={{backgroundColor: 'orange', width: 50, height: 200}}></View>
      </View>

      <View style={{flexDirection: 'row', backgroundColor: 'grey'}}>
        <View style={{backgroundColor: 'red', flex: 1, height: 50}}></View>
        <View style={{backgroundColor: 'blue', flex: 1, height: 50}}></View>
        <View style={{backgroundColor: 'green', flex: 1, height: 50}}></View>
        <View style={{backgroundColor: 'orange', flex: 1, height: 50}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/tech'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={{ marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{fontWeight: '700'}}>Anwar Sanusi</Text>
          <Text>{subscriber} ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
