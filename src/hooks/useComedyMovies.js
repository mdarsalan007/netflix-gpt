// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=35&sort_by=vote_average.desc&vote_count.gte=100

import { useDispatch, useSelector } from "react-redux";
import { addComedyMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_KEY, API_OPTIONS } from "../utils/Constant";

const useComedyMovies = () => {
  const comedyMovies = useSelector((store) => store.movies.comedyMovies);

  const dispatch = useDispatch();

  const getComedyMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=vote_average.desc&vote_count.gte=100`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addComedyMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    comedyMovies.length == 0 && getComedyMovies();
  }, []);
};

export default useComedyMovies;
