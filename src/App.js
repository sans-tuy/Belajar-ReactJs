import React, {Component, useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import FlexView from './pages/FlexView';
import StylingComponent from './pages/StylingComponent';
import Materi from './pages/BasicComponent';
import Position from './pages/Position';
import LifeCycle from './pages/LifeCycle';
import Useeffect from './pages/Useeffect';
import Props from './pages/Props';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import Svg from './pages/Svg';
import ImplementasiApi from './pages/ImplementasiApi';
// pemanggilan menggunakan export tanpa default
// import {Materi} from './Materi';

const App = () => {
  const [isShow, setisShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisShow(false);
  //   }, 6000);
  // });

  return (
    <View>
      <ScrollView>
        {/* <Text>Belajar React Native</Text>
        <StylingComponent />
        <Materi />
        <FlexView />
        <Position /> */}
        {/* {isShow && <LifeCycle />} */}
        {/* {isShow && <Useeffect />} */}
        {/* <Props /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <Svg /> */}
        <ImplementasiApi />
      </ScrollView>
    </View>
  );
};

export default App;
