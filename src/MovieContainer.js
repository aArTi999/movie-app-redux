import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bg from "./assests/bg.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMovieData } from "./redux/movie.actions";
const MovieContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieData());
  }, []);
  const { movie } = useSelector((state) => state);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const filterMovies = (genre) => {
    if (genre != 0) {
      setFilteredMovies(movie.data.filter((m) => m.genre_ids.includes(genre)));
    } else {
      setFilteredMovies(movie.data);
    }
  };
  useEffect(() => {
    setFilteredMovies(movie.data);
  }, [movie]);

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-screen  "
    >
      <header className="h-[10vh] flex justify-center items-center">
        <h2 className="text-3xl text-white font-bold tracking-wider">
          Movies Adda
        </h2>
      </header>
      <div className="w-full min-h-[90vh]">
        <div className="flex justify-around mt-5">
          <div
            onClick={() => filterMovies(0)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">All</h4>
          </div>
          <div
            onClick={() => filterMovies(27)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Horror</h4>
          </div>
          <div
            onClick={() => filterMovies(10749)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Romance</h4>
          </div>
          <div
            onClick={() => filterMovies(35)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Comedy</h4>
          </div>
          <div
            onClick={() => filterMovies(53)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Thriller</h4>
          </div>
          <div
            onClick={() => filterMovies(28)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Action</h4>
          </div>
          <div
            onClick={() => filterMovies(14)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Fantacy</h4>
          </div>
          <div
            onClick={() => filterMovies(878)}
            className="px-6 py-3 bg-white rounded-lg shadow-lg hover:bg-sky-400 hover:text-white cursor-pointer"
          >
            <h4 className="text-xl font-semibold tracking-wider">Sci-fi</h4>
          </div>
        </div>

        <motion.div className="w-full flex flex-wrap justify-around gap-y-8 gap-x-8 mt-10 p-5 ">
          {filteredMovies.map((m) => (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              layout
              key={m.id}
              className="w-1/5 min-h-1/4 max-h-1/4 bg-white p-2 rounded-lg text-center hover:bg-sky-400 hover:text-white"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`}
                alt=""
              />
              <h5 className="font-semibold">{m.title}</h5>
              <p className="text-sm text-justify">
                {m.overview.substring(0, 100)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default MovieContainer;
