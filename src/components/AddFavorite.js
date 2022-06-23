import {React, useState} from 'react'

const AddFavorite = ({movie, updateFavorites}) => {
//   const [favorites, setFavorites] = useState([])

//   const addFavoriteMovie = (movie) => {
//     const newFavoriteMovie = [...favorites, movie]
//     setFavorites(newFavoriteMovie)
  
  const handleFavoriteClick = () => {
    updateFavorites(movie)
    // console.log(...favorites)
  }

  // return (
  //   <button 
  //   className='btn'
  //   onClick={handleFavoriteClick}
  //   ><span>&#43;</span>
  //   </button>
  // )
}

export default AddFavorite