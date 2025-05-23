import { createSlice } from "@reduxjs/toolkit";

const searchedMoviesSlice = createSlice({
    name:"searchedMovies",
    initialState:{
        foundMovies:[],
    },
    reducers:{
        addFoundMovies:(state,action)=>{
            state.foundMovies = action.payload;
        },
    },

});


export const {addFoundMovies} = searchedMoviesSlice.actions;

export default searchedMoviesSlice.reducer;