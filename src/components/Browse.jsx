import { useSelector } from 'react-redux';
import useActionMovies from '../hooks/useActionMovies';
import useAdventureMovies from '../hooks/useAdventureMovies';
import useComedyMovies from '../hooks/useComedyMovies';
import useHorrorMovies from '../hooks/useHorror';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usepopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearchPage from './GptSearchPage';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const gptSearchPage = useSelector((store) => store.gpt.showGptSearch);
  console.log("GPT searchPage state:", gptSearchPage);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useHorrorMovies();
  useActionMovies();
  useAdventureMovies();
  useComedyMovies();

  return (
    <div className='overflow-hidden'>
      <Header />
      <div>
          {
        gptSearchPage ? <GptSearchPage /> : (<>

          <MainContainer />
          <SecondaryContainer />
        </>)
      }
      </div>
      

    </div>
  )
}

export default Browse;
