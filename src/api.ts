import axios from 'axios';

export const get_song = async () => {
  try {
    const config = {
      method: 'get',
      url: 'http://localhost:3000/coversong/1',
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error('Error fetching song data:', error);
    throw error;
  }
};

export const get_songfile = async () => {
  try {
    const config = {
      method: 'get',
      url: 'http://localhost:3000/coversong/stream/1',
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error('Error fetching song data:', error);
    throw error;
  }
};
