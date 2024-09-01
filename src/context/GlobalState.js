/*This global context (GlobalProvider) uses a useReducer to manage the global state of the application,
including lists of watched and unwatched films/series, in addition to persisting this data in localStorage. */
import React,{createContext,useReducer,useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    watchlist:localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched:localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props =>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    useEffect(() =>{
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
        localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state])


    const addToWatchlist = item =>{
        dispatch({type: "ADD_TO_WATCHLIST",payload: item})
    }

    const removeFromWatchlist = (id) =>{
        dispatch({type: "REMOVE_FROM_WATCHLIST",payload: id})
    }

    const addToWatched = item =>{
        dispatch({type: "ADD_TO_WATCHED",payload: item})
    }

    const moveToWatchlist = (item) => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: item });
      };
    
      const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
      };

    return(
    <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched,addToWatchlist, removeFromWatchlist,addToWatched,moveToWatchlist,removeFromWatched}}>
        {props.children}
    </GlobalContext.Provider>
    )
}