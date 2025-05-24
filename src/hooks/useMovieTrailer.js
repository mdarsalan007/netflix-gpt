import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);

  // const trailerVideo = useSelector(store=> store.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const Alltrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = Alltrailers.length ? Alltrailers[0] : Alltrailers[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
