import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {WeatherPage} from './src/pages';

function App() {
  return (
    <View>
      <SafeAreaView />
      <WeatherPage />
    </View>
  );
}

export default App;
