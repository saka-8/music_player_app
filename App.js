import React from 'react';
import {StyleSheet, View} from 'react-native';
import MusicPlayer from './src/components/MusicPlayer';

const App = () => {
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
