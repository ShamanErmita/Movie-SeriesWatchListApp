/*This component displays the list of films and series to watch,
or a message if there are no items in the list. */
import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { ItemCard } from './ItemCard'

export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext)
  return (
    <div className="item-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="item-grid">
            {watchlist.map((item) => (
              <ItemCard item={item} key={item.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-item">No Movies or TV Series in your list! Add Some!</h2>
        )}
      </div>
    </div>
  )
}
