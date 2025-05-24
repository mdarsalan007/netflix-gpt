import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10 ">
      {/* &autoplay=1&mute=1 */}
      <iframe
        className=" w-screen aspect-video filter brightness-50"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=2aoJCJ8tQ-q9wOot`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
