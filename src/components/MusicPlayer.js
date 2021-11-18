import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.mainContainer}>
        <Icon name="heart-outline" size={25} />
        <Text>this is the music player</Text>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
