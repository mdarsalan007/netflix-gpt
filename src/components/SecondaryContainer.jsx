
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    <div className='bg-gray-800'>
    <div className='-mt-64 z-10 relative text-white'>
      <MovieList  title={"Now Playing"} movies = {movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies = {movies?.topRatedMovies}/>
      <MovieList title={"Popular"} movies = {movies?.popularMovies}/>
      <MovieList title={"Upcoming"} movies = {movies?.upComingMovies}/>
      <MovieList title={"Horror"} movies = {movies?.horrorMovies}/>
      <MovieList title={"Action"} movies = {movies?.actionMovies}/>
      <MovieList title={"Adventure"} movies = {movies?.adventureMovies}/>
      <MovieList title={"Comedy"} movies = {movies?.comedyMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
