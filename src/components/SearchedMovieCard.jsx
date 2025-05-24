import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/Constant";
import ShimmerCard1 from "./ShimmerCard1";

const SearchedMovieCard = ({
  posterPath,
  title,
  lang,
  description,
  date,
  rating,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="flex flex-shrink-0 md:mx-3 my-2">
      <div className="relative md:w-40 w-20 h-30 md:h-60">
        {!posterPath ? (
          <div className="md:w-40 w-20 h-30 md:h-60  rounded-l-md bg-gray-300  md:text-lg font-medium p-2">
            Movie poster not available
          </div>
        ) : (
          <>
            {!imgLoaded && <ShimmerCard1 />}

            <img
              className={`md:w-40 w-20 h-30 md:h-60 rounded-l-md absolute top-0 left-0 transition-opacity duration-300 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={IMG_CDN_URL + posterPath}
              alt="movie poster"
              onLoad={() => setImgLoaded(true)}
            />
          </>
        )}
      </div>
      <div className=" md:w-52 w-22 h-30 md:h-60 bg-yellow-50 py-0.5  px-1 rounded-r-md">
        <h4 className="md:text-lg text-sm md:font-bold font-medium overflow-hidden md:max-h-14 max-h-[57px]">
          {title}
        </h4>
        <p>
          <span className=" font-medium text-sm md:text-base">
            {lang} - {date && date.split("-")[0]}
          </span>{" "}
          <span className="hidden md:inline-block">-</span>{" "}
          <span className=" font-medium text-sm md:text-base hidden md:inline-block">
            ({+rating ? Number(rating).toFixed(1) + "/10" : "Not Rated"})
          </span>
        </p>
        <p className="block md:hidden text-sm font-medium">
          ({+rating ? Number(rating).toFixed(1) + "/10" : "Not Rated"})
        </p>
        <p className=" text-sm md:block hidden  leading-snug overflow-hidden h-[152px]">
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default SearchedMovieCard;
