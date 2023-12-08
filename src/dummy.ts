const path = require('path');

export const songs = [
  {
    id: '0',
    title: '옛사랑',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image1.jpeg'),
    url: require('./assets/audio/song1.mp3'),
  },
  {
    id: '1',
    title: '잘 지내자 우리',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image2.jpeg'),
    url: require('./assets/audio/song2.mp3'),
  },
  {
    id: '2',
    title: '기다린만큼 더',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image3.jpeg'),
    url: require('./assets/audio/song3.mp3'),
  },
  {
    id: '3',
    title: '그때 헤어지면 돼',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image4.jpeg'),
    url: require('./assets/audio/song4.mp3'),
  },
  {
    id: '4',
    title: '바람이 분다',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image5.jpeg'),
    url: require('./assets/audio/song5.mp3'),
  },
  {
    id: '5',
    title: '스물 다섯, 스물 하나',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image6.jpeg'),
    url: require('./assets/audio/song6.mp3'),
  },
  {
    id: '6',
    title: '흰수염고래',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image7.jpeg'),
    url: require('./assets/audio/song7.mp3'),
  },
  {
    id: '7',
    title: '내가 너의 곁에 잠시 살았다는걸',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image8.jpeg'),
    url: require('./assets/audio/song8.mp3'),
  },
  {
    id: '8',
    title: '이등병의 편지',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image9.jpeg'),
    url: require('./assets/audio/song9.mp3'),
  },
  {
    id: '9',
    title: '서른즈음에',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image10.jpeg'),
    url: require('./assets/audio/song10.mp3'),
  },
  {
    id: '10',
    title: '고백',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image11.jpeg'),
    url: require('./assets/audio/song11.mp3'),
  },

  {
    id: '11',
    title: '사랑하기 때문에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image12.jpeg'),
    url: require('./assets/audio/song12.mp3'),
  },

  {
    id: '12',
    title: '내 마음에 비친 내 모습',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image13.jpeg'),
    url: require('./assets/audio/song13.mp3'),
  },
  {
    id: '13',
    title: '가리워진 길',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image14.jpeg'),
    url: require('./assets/audio/song14.mp3'),
  },
  {
    id: '14',
    title: '그대 내 품에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image15.jpeg'),
    url: require('./assets/audio/song15.mp3'),
  },
];

// 0_1 : 메타데이터
// 0_2 : 음원파일

// 노래 세트1
export const songs1_1 = [
  {
    id: '0',
    title: '옛사랑',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image1.jpeg'),
  },
  {
    id: '1',
    title: '잘 지내자 우리',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image2.jpeg'),
  },
  {
    id: '2',
    title: '기다린만큼 더',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image3.jpeg'),
  },
  {
    id: '3',
    title: '그때 헤어지면 돼',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image4.jpeg'),
  },
  {
    id: '4',
    title: '바람이 분다',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image5.jpeg'),
  },
  {
    id: '5',
    title: '스물 다섯, 스물 하나',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image6.jpeg'),
  },
  {
    id: '6',
    title: '흰수염고래',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image7.jpeg'),
  },
  {
    id: '7',
    title: '내가 너의 곁에 잠시 살았다는걸',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image8.jpeg'),
  },
  {
    id: '8',
    title: '이등병의 편지',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image9.jpeg'),
  },
  {
    id: '9',
    title: '서른즈음에',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image10.jpeg'),
  },
  {
    id: '10',
    title: '고백',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image11.jpeg'),
  },

  {
    id: '11',
    title: '사랑하기 때문에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image12.jpeg'),
  },

  {
    id: '12',
    title: '내 마음에 비친 내 모습',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image13.jpeg'),
  },
  {
    id: '13',
    title: '가리워진 길',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image14.jpeg'),
  },
  {
    id: '14',
    title: '그대 내 품에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image15.jpeg'),
  },
];
export const songs1_2 = [
  {
    id: '0',
    url: require('./assets/audio/song1.mp3'),
  },
  {
    id: '1',
    url: require('./assets/audio/song2.mp3'),
  },
  {
    id: '2',
    url: require('./assets/audio/song3.mp3'),
  },
  {
    id: '3',
    url: require('./assets/audio/song4.mp3'),
  },
  {
    id: '4',
    url: require('./assets/audio/song5.mp3'),
  },
  {
    id: '5',
    url: require('./assets/audio/song6.mp3'),
  },
  {
    id: '6',
    url: require('./assets/audio/song7.mp3'),
  },
  {
    id: '7',
    url: require('./assets/audio/song8.mp3'),
  },
  {
    id: '8',
    url: require('./assets/audio/song9.mp3'),
  },
  {
    id: '9',
    url: require('./assets/audio/song10.mp3'),
  },
  {
    id: '10',
    url: require('./assets/audio/song11.mp3'),
  },

  {
    id: '11',
    url: require('./assets/audio/song12.mp3'),
  },

  {
    id: '12',
    url: require('./assets/audio/song13.mp3'),
  },
  {
    id: '13',
    url: require('./assets/audio/song14.mp3'),
  },
  {
    id: '14',
    url: require('./assets/audio/song15.mp3'),
  },
];

// 노래 세트2
export const songs2_1 = [
  {
    id: '0',
    title: '옛사랑',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image1.jpeg'),
  },
  {
    id: '1',
    title: '잘 지내자 우리',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image2.jpeg'),
  },
  {
    id: '2',
    title: '기다린만큼 더',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image3.jpeg'),
  },
  {
    id: '3',
    title: '그때 헤어지면 돼',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image4.jpeg'),
  },
  {
    id: '4',
    title: '바람이 분다',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image5.jpeg'),
  },
  {
    id: '5',
    title: '스물 다섯, 스물 하나',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image6.jpeg'),
  },
  {
    id: '6',
    title: '흰수염고래',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image7.jpeg'),
  },
  {
    id: '7',
    title: '내가 너의 곁에 잠시 살았다는걸',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image8.jpeg'),
  },
  {
    id: '8',
    title: '이등병의 편지',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image9.jpeg'),
  },
  {
    id: '9',
    title: '서른즈음에',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image10.jpeg'),
  },
  {
    id: '10',
    title: '고백',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image11.jpeg'),
  },

  {
    id: '11',
    title: '사랑하기 때문에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image12.jpeg'),
  },

  {
    id: '12',
    title: '내 마음에 비친 내 모습',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image13.jpeg'),
  },
  {
    id: '13',
    title: '가리워진 길',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image14.jpeg'),
  },
  {
    id: '14',
    title: '그대 내 품에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image15.jpeg'),
  },
];
export const songs2_2 = [
  {
    id: '0',
    url: require('./assets/audio/song1.mp3'),
  },
  {
    id: '1',
    url: require('./assets/audio/song2.mp3'),
  },
  {
    id: '2',
    url: require('./assets/audio/song3.mp3'),
  },
  {
    id: '3',
    url: require('./assets/audio/song4.mp3'),
  },
  {
    id: '4',
    url: require('./assets/audio/song5.mp3'),
  },
  {
    id: '5',
    url: require('./assets/audio/song6.mp3'),
  },
  {
    id: '6',
    url: require('./assets/audio/song7.mp3'),
  },
  {
    id: '7',
    url: require('./assets/audio/song8.mp3'),
  },
  {
    id: '8',
    url: require('./assets/audio/song9.mp3'),
  },
  {
    id: '9',
    url: require('./assets/audio/song10.mp3'),
  },
  {
    id: '10',
    url: require('./assets/audio/song11.mp3'),
  },

  {
    id: '11',
    url: require('./assets/audio/song12.mp3'),
  },

  {
    id: '12',
    url: require('./assets/audio/song13.mp3'),
  },
  {
    id: '13',
    url: require('./assets/audio/song14.mp3'),
  },
  {
    id: '14',
    url: require('./assets/audio/song15.mp3'),
  },
];

// 노래 세트3
export const songs3_1 = [
  {
    id: '0',
    title: '옛사랑',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image1.jpeg'),
  },
  {
    id: '1',
    title: '잘 지내자 우리',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image2.jpeg'),
  },
  {
    id: '2',
    title: '기다린만큼 더',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image3.jpeg'),
  },
  {
    id: '3',
    title: '그때 헤어지면 돼',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image4.jpeg'),
  },
  {
    id: '4',
    title: '바람이 분다',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image5.jpeg'),
  },
  {
    id: '5',
    title: '스물 다섯, 스물 하나',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image6.jpeg'),
  },
  {
    id: '6',
    title: '흰수염고래',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image7.jpeg'),
  },
  {
    id: '7',
    title: '내가 너의 곁에 잠시 살았다는걸',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image8.jpeg'),
  },
  {
    id: '8',
    title: '이등병의 편지',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image9.jpeg'),
  },
  {
    id: '9',
    title: '서른즈음에',
    artist: '김광석',
    genre: '인디',
    artwork: require('./assets/image/image10.jpeg'),
  },
  {
    id: '10',
    title: '고백',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image11.jpeg'),
  },

  {
    id: '11',
    title: '사랑하기 때문에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image12.jpeg'),
  },

  {
    id: '12',
    title: '내 마음에 비친 내 모습',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image13.jpeg'),
  },
  {
    id: '13',
    title: '가리워진 길',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image14.jpeg'),
  },
  {
    id: '14',
    title: '그대 내 품에',
    artist: '유재하',
    genre: '인디',
    artwork: require('./assets/image/image15.jpeg'),
  },
];
export const songs3_2 = [
  {
    id: '0',
    url: require('./assets/audio/song1.mp3'),
  },
  {
    id: '1',
    url: require('./assets/audio/song2.mp3'),
  },
  {
    id: '2',
    url: require('./assets/audio/song3.mp3'),
  },
  {
    id: '3',
    url: require('./assets/audio/song4.mp3'),
  },
  {
    id: '4',
    url: require('./assets/audio/song5.mp3'),
  },
  {
    id: '5',
    url: require('./assets/audio/song6.mp3'),
  },
  {
    id: '6',
    url: require('./assets/audio/song7.mp3'),
  },
  {
    id: '7',
    url: require('./assets/audio/song8.mp3'),
  },
  {
    id: '8',
    url: require('./assets/audio/song9.mp3'),
  },
  {
    id: '9',
    url: require('./assets/audio/song10.mp3'),
  },
  {
    id: '10',
    url: require('./assets/audio/song11.mp3'),
  },

  {
    id: '11',
    url: require('./assets/audio/song12.mp3'),
  },

  {
    id: '12',
    url: require('./assets/audio/song13.mp3'),
  },
  {
    id: '13',
    url: require('./assets/audio/song14.mp3'),
  },
  {
    id: '14',
    url: require('./assets/audio/song15.mp3'),
  },
];
