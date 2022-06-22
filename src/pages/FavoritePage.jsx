import React from 'react'
import Movie from '../components/Movie'

const FavoritePage = ({favorites, movie, getTrailer, displayTrailer, updateFavorites}) => {

  const DisplayFavorites = () => {
    return favorites.map((movie, index) => {
      return  <Movie getTrailer={getTrailer}displayTrailer={displayTrailer} movie={movie} key={index} updateFavorites={updateFavorites}/>
  } 
  )
}

  return DisplayFavorites()
}

export default FavoritePage