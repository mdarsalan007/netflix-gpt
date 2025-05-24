import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-gray-800 md:mt-10 md:pt-0 pt-10 pb-4 md:pb-8">
      <div className=" z-10 relative text-white">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
        <MovieList title={"Horror"} movies={movies?.horrorMovies} />
        <MovieList title={"Action"} movies={movies?.actionMovies} />
        <MovieList title={"Adventure"} movies={movies?.adventureMovies} />
        <MovieList title={"Comedy"} movies={movies?.comedyMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
