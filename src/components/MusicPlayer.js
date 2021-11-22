import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import Songs from '../model/Data';
const {height, width} = Dimensions.get('window');
const MusicPlayer = () => {
  const songRender = ({index, item}) => {
    return (
      <View style={{width: width, alignItems: 'center'}}>
        <View style={styles.imgDesign}>
          <Image source={item.image} style={styles.imgWork} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={Songs}
          renderItem={songRender}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEvenThrottle={16}
        />
        <View>
          <Text style={styles.song}>shashidhara</Text>
          <Text style={styles.artist}>saka shashi</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD36d"
            minimumTrackTintColor="#FFD36d"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}
          />
        </View>
        <View style={styles.progressContainerLabel}>
          <Text style={styles.progresstext}>0:00</Text>
          <Text style={styles.progresstext}>10:00</Text>
        </View>
        <View style={styles.contols}>
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="play-skip-back-outline"
              color="#177777"
              size={30}
              style={{marginTop: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="ios-pause-circle" color="#177777" size={70} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="play-skip-forward-outline"
              color="#177777"
              size={30}
              style={{marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" color="#177777" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="repeat" color="#177777" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="share-outline" color="#177777" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="ellipsis-horizontal" color="#177777" size={30} />
          </TouchableOpacity>
        </View>
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
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  imgDesign: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: '#cccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imgWork: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  song: {
    fontSize: 18,
    fontWeight: '600',
    color: '#EEEEEE',
    textAlign: 'center',
  },
  artist: {
    fontSize: 16,
    fontWeight: '200',
    color: '#EEEEEE',
    textAlign: 'center',
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  progressContainerLabel: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progresstext: {
    color: '#fff',
  },
  contols: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
