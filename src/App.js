import React from "react";
import { Provider } from "react-redux";
import MovieContainer from "./MovieContainer";
import { store } from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <MovieContainer />
    </Provider>
  );
};
export default App;
