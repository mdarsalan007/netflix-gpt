import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./GptSlice";
import configReducer from "./configSlice";
import searchedMOviesReducer from "./searchedMoviesSlice";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies: moviesReducer,
            gpt:gptReducer,
            config:configReducer,
            searchedMOvies:searchedMOviesReducer,
        }
    }
)

export default appStore;