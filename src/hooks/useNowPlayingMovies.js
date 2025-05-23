import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";

const useNowPlayingMovies = ()=>{

          const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);


    const dispatch = useDispatch();

  const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

    const json = await data.json();
    dispatch(addnowPlayingMovies(json.results));
    console.log(json.results)
  }
  
  useEffect(()=>{
    nowPlayingMovies.length==0 && getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;