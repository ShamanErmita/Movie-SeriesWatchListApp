/*This component manages the control buttons for adding, moving, or removing items
from the watched or unwatched list, using global context. */
import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const ItemControls = ({item,type}) => {
    const {removeFromWatchlist,addToWatched,moveToWatchlist,removeFromWatched} = useContext(GlobalContext)
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addToWatched(item)}>
          👁️
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatchlist(item.id)}
          >
            ❌
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={()=>moveToWatchlist(item)}>
          📃
          </button>

          <button
            className="ctrl-btn"
            onClick={()=>removeFromWatched(item.id)}
          >
            ❌
          </button>
        </>
      )}
    </div>
  )
}
