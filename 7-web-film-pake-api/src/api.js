import axios from "axios";

const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;
const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;


export const getMovieList = async () => {
  const movie = await axios.get(
    // tambahkan page agar tidak terkena rate limit
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
  return movie.data.results
  //data dan results itu dari API
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&&api_key=${apiKey}`
  );
  return search.data
};