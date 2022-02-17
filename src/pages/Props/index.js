import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={styles.story}>
      <Image source={{uri: props.link}} style={styles.iconStory} />
      <Text>{props.title} </Text>
    </View>
  );
};

export default function Useeffect() {
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        <Story
          link="https://placeimg.com/100/100/tech"
          title="swjsdkdskajdkasaljd1"
        />
        <Story
          link="https://placeimg.com/100/100/people"
          title="swdsdsjadajdjsk2"
        />
        <Story
          link="https://placeimg.com/100/100/tech"
          title="swjdskasajdklasljdsaj3"
        />
        <Story
          link="https://placeimg.com/100/100/people"
          title="swhdasjdskajdkslajdhdsa4"
        />
        <Story
          link="https://placeimg.com/100/100/tech"
          title="swjdadsopjksdajkdjsalkpsak5"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  iconStory: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  story: {
    alignItems: 'center',
    marginRight: 40,
    maxWidth: 100,
  },
});
