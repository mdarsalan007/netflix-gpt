import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        popularMovies:[],
        topRatedMovies:[],
        upComingMovies:[],
        horrorMovies:[],
        actionMovies:[],
        adventureMovies:[],
        comedyMovies:[],
        trailerVideo: null,
    },
    reducers:{
        addnowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state,action) =>{
            state.upComingMovies = action.payload;
        },
        addHorrorMovies: (state,action) =>{
            state.horrorMovies = action.payload;
        },
        addActionMovies: (state,action) =>{
            state.actionMovies = action.payload;
        },
        addAdventureMovies: (state,action) =>{
            state.adventureMovies = action.payload;
        },
        addComedyMovies: (state,action) =>{
            state.comedyMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
    },

});

export const  {addnowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpComingMovies,addHorrorMovies,addActionMovies,addAdventureMovies,addComedyMovies} = moviesSlice.actions;

export default moviesSlice.reducer;