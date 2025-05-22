import { useSelector } from 'react-redux';
import useActionMovies from '../hooks/useActionMovies';
import useAdventureMovies from '../hooks/useAdventureMovies';
import useComedyMovies from '../hooks/useComedyMovies';
import useHorrorMovies from '../hooks/useHorror';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usepopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log("GPT search state:", gptSearch);

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
      <Header />
      {
        gptSearch ? <GptSearch /> : (<>

          <MainContainer />
          <SecondaryContainer />
        </>)
      }

    </div>
  )
}

export default Browse
