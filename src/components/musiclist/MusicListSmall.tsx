import React, { useRef } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ISongData } from '../../screens/MainScreen/MainScreen';
import { chunkArray } from '../../utils';

const { width } = Dimensions.get('window');

interface MusicListSmallItemProps {
  imageUrl: string;
  genre: string;
  songName: string;
}

interface MusicListSmallProps {
  data: ISongData[];
  onSongSelect: (arg: ISongData) => void;
}

export default function MusicListSmall({
  data,
  onSongSelect,
}: MusicListSmallProps) {
  const scrollStartRef = useRef<number>(0);
  const scrollRef = useRef<ScrollView>(null);
  const pageRef = useRef<number>(1);

  const transformedData = chunkArray(data);

  return (
    <View style={styles.container}>
      <Title />
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        scrollEventThrottle={1}
        onScrollBeginDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          scrollStartRef.current = x;
        }}
        onScrollEndDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          const dx = x - scrollStartRef.current;

          if (width / 4 < dx && pageRef.current !== 999) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * pageRef.current,
              animated: true,
            });
            pageRef.current = pageRef.current + 1;
          }

          if (0 < dx && dx < width / 4) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }

          if (dx < -width / 4 && pageRef.current !== 1) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 2),
              animated: true,
            });
            pageRef.current = pageRef.current - 1;
          }

          if (-width / 4 < dx && dx < 0) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }
        }}>
        {transformedData.map((outerArray, outerIndex) => {
          return (
            <View style={styles.outerView} key={`outer-${outerIndex}`}>
              {outerArray.map((songData, innerIndex) => {
                return (
                  <TouchableOpacity
                    onPress={() => onSongSelect(songData)}
                    key={`inner-${outerIndex}-${innerIndex}`}>
                    <MusicListSmallItem
                      songName={songData.title}
                      genre={songData.genre}
                      imageUrl={songData.artwork}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListSmallItem({
  imageUrl,
  genre,
  songName,
}: MusicListSmallItemProps) {
  return (
    <View style={styles.songItemContainer}>
      <Image source={imageUrl} style={styles.songItemImage} />
      <View style={styles.songItemInfo}>
        <Text style={styles.genreText}>{genre}</Text>
        <Text style={styles.songNameText} numberOfLines={1}>
          {songName}
        </Text>
      </View>
      <View style={styles.menuIconContainer}>
        <Icon name="dots-vertical" color="white" size={12} />
      </View>
    </View>
  );
}

function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>인기 음악</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  outerView: {
    width: width * 0.92,
  },
  songItemContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  songItemImage: {
    width: 50,
    height: 50,
    borderRadius: 2,
  },
  songItemInfo: {
    marginLeft: 14,
    justifyContent: 'center',
    flex: 1,
  },
  genreText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 4,
  },
  songNameText: {
    color: 'white',
  },
  menuIconContainer: {
    padding: 10,
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'white',
  },
});
