import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const USER_KEY = '35263698-bb6689a1185842e54787b1a49';

const getImagesApi = async (inputValue, pageNumber) => {
  const url = await axios.get(
    `${BASE_URL}?key=${USER_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNumber}`
  );
  return url.data;
};

export default getImagesApi;

// ===================================================
// const getImagesApi = (inputValue, pageNumber) => {
//   return axios
//     .get(
//       `${BASE_URL}?key=${USER_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNumber}`
//     )
//     .then(response => response.data);
// };
