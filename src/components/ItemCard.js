/*This component is responsible for displaying the image of a film or series
and the controls to add or remove the item from the watched or unwatched list.*/
import React from 'react'
import { ItemControls } from './ItemControls'

export const ItemCard = ({item,type}) => {
  return (
    <div className="item-card">
      <div className="overlay"></div>
      {item.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={`${item.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      <ItemControls type={type} item={item} />
    </div> 
  )
}
