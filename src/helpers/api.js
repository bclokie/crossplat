import axios from 'axios';

const fetchGameTitles = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/test/fullcrosses');
    return response.data;
  } catch (error) {
    console.error('Error fetching game titles:', error);
    return [];
  }
};

export { fetchGameTitles };
