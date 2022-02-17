import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function ImplementasiApi() {
  // useEffect(() => {
  //   fetch('https://reqres.in/api/users/2')
  //     .then(res => res.json())
  //     .then(json => console.log(json));
  // }, []);

  // const DataApi = {
  //   name: 'morpheus',
  //   job: 'leader',
  // };
  // useEffect(() => {
  //   fetch('https://reqres.in/api/users', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(DataApi),
  //   })
  //     .then(res => res.json())
  //     .then(json => console.log('POST response:', json));
  // }, []);
  const [user, setuser] = useState({
    avatar: null,
    first_name: '',
    email: '',
    last_name: '',
  });
  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(res => res.json())
      .then(json => setuser(json.data));
  };

  const [dataPost, setdataPost] = useState({
    job: '',
    name: '',
  });
  const postData = () => {
    // misal ini data di form yang sudah di submit
    const DataApi = {
      name: 'morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(DataApi),
    })
      .then(res => res.json())
      .then(json => setdataPost(json));
  };

  return (
    <View>
      <Text>ImplementasiApi</Text>
      <Button title="Get Data" onPress={getData} />
      <Image style={styles.icon} source={{uri: user.avatar}} />
      <Text>{user.first_name + ' ' + user.last_name} </Text>
      <Text>{user.email} </Text>
      <Button title="Post Data" onPress={postData} />
      <Text>Data yang dipost : </Text>
      <Text>{dataPost.name} </Text>
      <Text>{dataPost.job} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
});
