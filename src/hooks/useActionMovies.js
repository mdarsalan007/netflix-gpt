// https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=28&sort_by=vote_average.desc&vote_count.gte=100


import { useDispatch } from "react-redux";
import { addActionMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_KEY, API_OPTIONS } from "../utils/Constant";

const useActionMovies = ()=>{


    const dispatch = useDispatch();

  const getActionMovies = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=vote_average.desc&vote_count.gte=100`, API_OPTIONS);

    const json = await data.json();
    dispatch(addActionMovies(json.results));
    console.log(json.results)
  }
  
  useEffect(()=>{
    getActionMovies();
  },[])
}

export default useActionMovies;