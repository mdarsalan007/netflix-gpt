import useActionMovies from '../hooks/useActionMovies';
import useAdventureMovies from '../hooks/useAdventureMovies';
import useComedyMovies from '../hooks/useComedyMovies';
import useHorrorMovies from '../hooks/useHorror';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usepopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useHorrorMovies();
  useActionMovies();
  useAdventureMovies();
  useComedyMovies();
  
  return (
    <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
