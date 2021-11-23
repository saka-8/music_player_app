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
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import {info} from '../model/info';
const {height, width} = Dimensions.get('window');

const MusicPlayer = () => {
  const scrollx = useRef(new Animated.Value(0)).current;
  const [number, setnumber] = useState(0);
  const songSlider = useRef(null);

  useEffect(() => {
    scrollx.addListener(({value}) => {
      // console.log('scrollX:', scrollx);
      // console.log('width', width);
      const index = Math.round(value / width);
      setnumber(index);
      // console.log(index);
    });
    return () => {
      scrollx.removeAllListeners();
    };
  }, []);

  const skipToForward = () => {
    songSlider.current.scrollToOffset({
      offset: (number + 1) * width,
    });
  };

  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (number - 1) * width,
    });
  };

  const songRender = ({index, item}) => {
    console.log(index);
    return (
      <Animated.View
        style={{
          width: width,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'black',
        }}>
        <View style={styles.imgDesign}>
          <Image source={item.image} style={styles.imgWork} />
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{width: width}}>
          <Animated.FlatList
            ref={songSlider}
            data={info}
            renderItem={songRender}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEvenThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollx},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />
        </View>
        <View>
          <Text style={styles.song}>{info[number].title}</Text>
          <Text style={styles.artist}>{info[number].artist}</Text>
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
          <TouchableOpacity onPress={skipToPrevious}>
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
          <TouchableOpacity onPress={skipToForward}>
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
