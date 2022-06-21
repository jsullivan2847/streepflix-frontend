import {React, useState} from 'react'

const AddFavorite = (props) => {
  const [favorites, setFavorites] = useState([])

  // const addFavoriteMovie = (movie) => {
  //   const newFavoriteMovie = [...favorites, movie]
  //   setFavorites(newFavoriteMovie)
  // }

  const handleFavoriteClick = () => {
    alert('clicked')
  }

  return (
    <button 
    className='btn'
    onClick={handleFavoriteClick}
    ><span>&#43;</span>
    </button>
  )
}

export default AddFavorite