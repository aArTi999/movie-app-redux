import axios from "axios";
import { FETCH_MOVIE_DETAILS, FETCH_SUCCESS, FETCH_ERROR } from "./movie.types";
export const fetchMovieDetails = () => {
  return {
    type: FETCH_MOVIE_DETAILS,
  };
};
export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};
export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

export const fetchMovieData = () => {
  return (dispatch) => {
    dispatch(fetchMovieDetails);
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=faf53b6e72f455bba3aa37a1c7d758f3"
      )
      .then((res) => dispatch(fetchSuccess(res.data.results)))
      .catch((err) => dispatch(fetchError(err.message)));
  };
};
