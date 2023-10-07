const Reducer = (state, action) => {
    switch(action.type) {
    case "SET_LOADING":
    return {
...state,
isLoading:true,
    }
    case "SET_API_DATA":
           const frontMovies = action.payload.filter((CurElem) => {
            return CurElem;
           });
        return {
            ...state,
            isLoading:false,
            isError:false,
            moviesList:action.payload,
            carosuleMovies:frontMovies,
        }
    default:
  return state;
    };
}

export default Reducer;