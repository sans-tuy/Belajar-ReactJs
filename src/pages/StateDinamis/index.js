import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CounterFunction = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>State dengan Function</Text>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    return (
      <View>
        <Text>State dengan Class</Text>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <CounterFunction />
      <CounterClass />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});

export default StateDinamis;
