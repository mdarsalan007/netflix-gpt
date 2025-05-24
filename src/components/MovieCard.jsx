import React from "react";
import { IMG_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="md:w-40 w-20 flex-shrink-0 mx-2 ">
      <img src={IMG_CDN_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
