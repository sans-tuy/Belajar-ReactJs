import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'

class FlexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: '100',
    };
  }

  // dipanggil ketika component sudah dibuat
  componentDidMount() {
    setTimeout(() => {
      this.setState({subscribe: '200'});
    }, 2000);
    console.log('Compoenent did mount');
  }

  // dipanggil ketika component terjadi update data
  componentDidUpdate() {
    console.log('Component did update');
  }

  // dipanggil ketika component dihapus
  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    return (
      // flex membagi layout secara flexsibel dengan memberi nilai flex masing-masing 1,2,3 dengan fixed position width 125 maka ruang di layar dikurangi 125 dan sisa ruang akan dibagi menjadi 1/6, 2/6 dan 3/6
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
          <View style={{ backgroundColor: 'green' , width: 50, height: 150}}></View>
          <View style={{ backgroundColor: 'orange' , width: 50, height: 200}}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey'
          }}>
          <View style={{backgroundColor: 'red', flex: 1, height: 50}}></View>
          <View style={{backgroundColor: 'blue', flex: 1, height: 50}}></View>
          <View style={{ backgroundColor: 'green' , flex: 1, height: 50}}></View>
          <View style={{ backgroundColor: 'orange' , flex: 1, height: 50}}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: 'https://placeimg.com/100/100/tech' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
          <View style={{ marginLeft: 10, justifyContent: 'center'}}>
            <Text style={{ fontWeight: '700' }}>Anwar Sanusi</Text>
            <Text>{this.state.subscribe} ribu subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default function LifeCycle() {
  return (
    <View>
      <FlexView />
    </View>
  );
}

const styles = StyleSheet.create({})
