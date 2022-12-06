import { FETCH_MOVIE_DETAILS, FETCH_SUCCESS, FETCH_ERROR } from "./movie.types";
const initialState = {
  loading: false,
  data: [],
  error: "",
};
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
