// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=27&sort_by=vote_average.desc&vote_count.gte=100

import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_KEY, API_OPTIONS } from "../utils/Constant";

const useHorrorMovies = () => {
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=vote_average.desc&vote_count.gte=100`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    horrorMovies == 0 && getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
