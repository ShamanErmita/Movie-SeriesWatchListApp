/*This component displays the search results for films or series,
allowing you to add the item to the watched or unwatched list.*/
import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ResultCard = ({item}) => {
  const {
    addToWatchlist,addToWatched,watchlist,watched
  } =useContext(GlobalContext)

  // Checks if the item is already in the watched list or unwatched
  let storedItem = watchlist.find(o=>o.id === item.id)
  let storedItemWatched = watched.find(o=>o.id === item.id)

  const watchlistDisabled = storedItem || storedItemWatched ? true : false
  const watchedDisabled = storedItemWatched ? true : false

  return (
    
    <div className="result-card">
      <div className="poster-wrapper">
        {item.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={`${item.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{item.title || item.name}</h3>
          <h4 className="release-date">
            {item.release_date || item.first_air_date}
          </h4>
        </div>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addToWatchlist(item)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addToWatched(item)}
          >
            Add to Watched
          </button>
        </div>
        </div>
  )
}
