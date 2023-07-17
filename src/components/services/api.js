import axios from 'axios';

const API_KEY = '33026063-434c5867dd29ef24b5f44b254';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};
export async function getImages(name, page, perpage) {
  const response = await axios.get(
    `?q=${name}&page=${page}&per_page=${perpage}`
  );
  console.log('response :>> ', response.data.hits);
  return response.data.hits;
}
