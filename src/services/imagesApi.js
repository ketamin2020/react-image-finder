const fetchImagesArticle = (query, page) => {
  const API_KEY = "18038475-d13b74e7e60d256e98f342690";
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=12&page=${page}`;
  return fetch(URL).then((res) => res.json().then((images) => images.hits));
};
export default {
  fetchImagesArticle,
};
