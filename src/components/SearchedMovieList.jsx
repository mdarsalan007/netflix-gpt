import React from "react";
import SearchedMovieCard from "./SearchedMovieCard";

const SearchedMovieList = ({ movies }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="flex flex-wrap gap-2 w-[100%] justify-center ">
        {movies?.map((movie) => {
          const {
            id,
            poster_path,
            original_language,
            overview,
            title,
            release_date,
            vote_average,
            backdrop_path,
          } = movie;
          return (
            <SearchedMovieCard
              key={id}
              posterPath={poster_path || backdrop_path}
              title={title}
              lang={original_language}
              description={overview}
              date={release_date}
              rating={vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchedMovieList;
