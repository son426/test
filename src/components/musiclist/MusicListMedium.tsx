import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ISongData } from '../../screens/MainScreen/MainScreen';

const { width } = Dimensions.get('window');

interface MusicListMediumItemProps {
  imageUrl: string;
  songName: string;
}

interface IMusicListMediumProps {
  data: ISongData[];
  onSongSelect: (arg: ISongData) => void;
}

export default function MusicListMedium({
  data,
  onSongSelect,
}: IMusicListMediumProps) {
  return (
    <View style={styles.container}>
      <Title />
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}>
        {data.map((songData, index) => {
          return (
            <TouchableOpacity
              style={styles.songItemContainer}
              onPress={() => onSongSelect(songData)}
              key={`musicListMedium` + index}>
              <View>
                <MusicListMediumItem
                  songName={songData.title}
                  imageUrl={songData.artwork}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListMediumItem({ songName, imageUrl }: MusicListMediumItemProps) {
  return (
    <View>
      <Image source={imageUrl} style={styles.songItemImage} />
      <View style={styles.playIconContainer}>
        <Icon name="play-arrow" size={20} style={styles.playIcon} />
      </View>

      <Text style={styles.songNameText} numberOfLines={2}>
        {songName}
      </Text>
    </View>
  );
}

function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>내가 많이 들은 음악</Text>
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
  songItemContainer: {
    marginRight: 20,
  },
  songItemImage: {
    width: width / 4,
    height: width / 4,
    borderRadius: 2,
  },
  playIconContainer: {
    width: width / 4,
    height: width / 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  playIcon: {
    fontSize: 20,
    color: 'white',
  },
  songNameText: {
    color: 'white',
    marginTop: 5,
    width: width / 4,
    fontSize: 13,
    height: 60,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
