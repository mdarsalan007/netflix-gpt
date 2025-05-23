import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/Constant";
import ShimmerCard1 from "./ShimmerCard1";

const SearchedMovieCard = ({ posterPath, title, lang, description, date }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="flex flex-shrink-0 mx-3 my-2">
      <div className="relative w-40 h-60">
        {!posterPath ? (
          <div className="w-40 h-60 rounded-l-md bg-gray-300 text-lg font-medium p-2">Movie poster not available</div>
        ) : (
          <>
            {!imgLoaded && <ShimmerCard1 />}

            <img
              className={`w-40 h-60 rounded-l-md absolute top-0 left-0 transition-opacity duration-300 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={IMG_CDN_URL + posterPath}
              alt="movie poster"
              onLoad={() => setImgLoaded(true)}
            />
          </>
        )}
      </div>
      <div className=" w-52 h-60 bg-blue-50 py-0.5  px-1 rounded-r-md">
        <h4
          className="text-lg font-bold overflow-hidden"
          style={{ maxHeight: "56px" }}
        >
          {title}
        </h4>
        <p className=" font-medium">
          {lang} - {date.split("-")[0]}
        </p>
        <p className=" text-sm text-gray-900 font-medium leading-snug overflow-hidden h-[152px]">
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default SearchedMovieCard;
