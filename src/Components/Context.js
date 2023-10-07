import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./Reducer";

const AppContext = createContext();

const API = "https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

const initialState = {
    isLoading:false,
    isError: false,
    carosuleMovies: [],
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getMovies = async (url) =>{
        dispatch({type:"SET_LOADING"})
        try {
const res = await axios.get(url);
const moviesList = await res.data.results;
dispatch({ type: "SET_API_DATA", payload: moviesList });


console.log(
    "🚀 ~ file: Context.js ~ line 15 ~ getMovies ~ moviesList",
    moviesList,
  );
} catch (error) {
    dispatch({ type: "API_ERROR"});
}
};
useEffect(() => {
    getMovies(API);
  }, []);

    return (
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    );
};

const useMovieContext = () => {
    return useContext(AppContext)
}
export {AppProvider, useMovieContext, AppContext}