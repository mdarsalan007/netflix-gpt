// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=12&sort_by=vote_average.desc&vote_count.gte=100

import { useDispatch, useSelector } from "react-redux";
import { addAdventureMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_KEY, API_OPTIONS } from "../utils/Constant";

const useAdventureMovies = () => {
  const adventureMovies = useSelector((store) => store.movies.adventureMovies);

  const dispatch = useDispatch();

  const getAdventureMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=vote_average.desc&vote_count.gte=100`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addAdventureMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    adventureMovies.length == 0 && getAdventureMovies();
  }, []);
};

export default useAdventureMovies;
