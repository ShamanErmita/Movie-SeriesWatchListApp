/*This component displays the list of films and series that have been watched,
or a message if there are no items in the list. */
import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { ItemCard } from './ItemCard'

export const Watched = () => {
  const {watched} = useContext(GlobalContext)
  return (
    <div className="item-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies & TV Series</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Item" : "Items"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="item-grid">
            {watched.map((item) => (
              <ItemCard item={item} key={item.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-item">No Movies or TV Series in your list! Add Some!</h2>
        )}
      </div>
    </div>
  )
}
