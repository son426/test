import { Dimensions, Image, ScrollView, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

interface MusicListLargeItemProps {
  imageUrl: string;
  songName: string;
}

export default function MusicListLarge() {
  return (
    <View>
      <Title />
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}>
        {[...Array(10)].map((value, index) => {
          return (
            <View style={{ marginRight: 20 }} key={index}>
              <MusicListLargeItem
                imageUrl={`https://picsum.photos/40${index}`}
                songName={`가수 ${index}`} // Replace with actual song name
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function MusicListLargeItem({ imageUrl, songName }: MusicListLargeItemProps) {
  return (
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: width / 3, height: width / 3, borderRadius: 4 }}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 13,
          }}
          numberOfLines={2}>
          {songName}
        </Text>
      </View>
    </View>
  );
}

function Title() {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
      <Text
        style={{
          fontSize: 13,
          color: 'white',
          fontWeight: '200',
          marginBottom: 3,
        }}>
        내가 좋아하는 가수 모아듣기
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'white' }}>
        가수별
      </Text>
    </View>
  );
}
