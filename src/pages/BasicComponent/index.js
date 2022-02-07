import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const Picture = () => {
  return (
    <Image
      source={{ uri: 'https://placeimg.com/100/100/tech' }}
      style={{ width: 100, height: 100 }}
    />
  );
};

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'https://placeimg.com/100/100/people' }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}

const Materi = () => {
  // hook react native untuk manipulasi state didalam function
  // value sebagai nama state onChangeText sebagai setter untuk mengubah nilai state
  const [value, onChangeText] = React.useState('22');
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Your Age</Text>
          <TextInput
            // more props on docs
            style={{ paddingTop: 10, borderWidth: 1, margin: 12 }}
            placeholder="input age"
            // more keyboard type at documentation
            keyboardType="numeric"
            multiline
            onChange={text => onChangeText(text)}
            value={value}
            numberOfLines={2}
          />
          <Picture />
          <Profile />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// jika menggunakan export tanpa default maka import tanpa menggunakan {} contoh :
// import {Materi} from ./Materi.js
// export const Materi = () => {
//   // hook react native untuk manipulasi state didalam function
//   // value sebagai nama state onChangeText sebagai setter untuk mengubah nilai state
//   const [value, onChangeText] = React.useState('22');
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//           <Text>Your Age</Text>
//           <TextInput
//             // more props on docs
//             style={{ paddingTop: 10, borderWidth: 1, margin: 12 }}
//             placeholder="input age"
//             // more keyboard type at documentation
//             keyboardType="numeric"
//             multiline
//             onChange={text => onChangeText(text)}
//             value={value}
//             numberOfLines={2}
//           />
//           <Picture />
//           <Profile />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

export default Materi;
