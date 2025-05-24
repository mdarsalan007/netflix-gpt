import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="">
        <h4 className="mx-3 mb-1 md:mt-4 mt-1 font-medium text-base md:text-lg">
          {title}
        </h4>

        <div className="relative">
          <div className="flex overflow-x-auto max-w-full scrollbar-hide">
            {movies?.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie?.poster_path} />
              );
            })}
            <div className="absolute right-0 top-0 h-[100%] md:w-40 w-15 bg-gradient-to-l from-[#ed3636] to-transparent pointer-events-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
