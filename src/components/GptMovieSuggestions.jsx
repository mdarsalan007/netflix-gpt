import React from "react";
import SearchedMovieList from "./SearchedMovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const searchmovies = useSelector((store) => store.searchedMOvies);
  return (
    <div className="">
      <div className="">
        <SearchedMovieList movies={searchmovies?.foundMovies} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
