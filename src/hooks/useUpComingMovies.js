import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

const useUpComingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upComingMovies);

  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    upcomingMovies == 0 && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
