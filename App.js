import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {AnimationOne, WeatherPage} from './src/pages';

function App() {
  const alpha = Math.PI / 6;
  return (
    <View>
      <SafeAreaView />
      {/* <WeatherPage /> */}
      <AnimationOne />
    </View>
  );
}

export default App;
