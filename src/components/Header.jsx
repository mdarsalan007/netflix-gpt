import logo from "../assets/Logo-1.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/GptSlice";
import { SUPPRTED_LANGUAGE } from "../utils/Constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    // toggle gpt search
    console.log("GPT Search Clicked");
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className=" relative ">
      <div className="relative w-full   z-20  flex-col md:flex-row md:h-20 md:mt-0 pt-2 flex items-center justify-between px-6 mb-2">
        <img className="w-28 md:w-40" src={logo} />
        {user && (
          <div className="flex  items-center md:text-base text-sm md:font-semibold text-white font-medium">
            {showGptSearch && (
              <select
                onChange={handleLanguageChange}
                className=" md:h-8  mx-1 py-0.5 md:px-1 px-0.5 rounded-sm bg-cyan-400 hover:bg- hover:bg-cyan-300 transition duration-300 cursor-pointer gap-1"
              >
                {SUPPRTED_LANGUAGE.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
            )}
            <div>
              <button
                className=" md:h-8  mx-1 py-0.5 px-0.5 md:px-1 rounded-sm bg-cyan-400 hover:bg- hover:bg-cyan-300 transition duration-300 cursor-pointer"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Home Page" : "Movie Search"}
              </button>
            </div>

            <button
              onClick={handleSignOut}
              className=" md:h-8  mx-1 py-0.5 md:px-1 px-0.5 rounded-sm bg-red-600 hover:bg- hover:bg-red-500 transition duration-300 cursor-pointer"
            >
              Sign Out
            </button>
            <div>
              <img
                className="h-8 md:h-10 rounded-[50%] mx-1 px-1"
                src={user.photoURL}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
