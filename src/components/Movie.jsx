// import { useState } from "react";
import AddFavorite from './AddFavorite'
const Movie = ({movie, getTrailer, updateFavorites}) => {
    //Destructuring the movie info
    const {title, poster_path} = movie;
    //State for movie trailer
    // const [trailer, setTrailer] = useState(null);
    //bas URL for poster src
    const posterURL = 'http://image.tmdb.org/t/p/w185'


    //Loads movie poster and info
    const movieLoaded = () => {
        return ( <div className="posters-container">
            <img onClick={handleClick} src={posterURL + poster_path} alt={title + "poster"}/>
            <AddFavorite movie={movie} updateFavorites={updateFavorites}/>
            <h5>{title}</h5> 
            </div>
        )
    }

    //To click trailer on and off
    const handleClick = (event) => {
        getTrailer(title)
    }

    return(
        <div className="movie-container">
            {movie? movieLoaded() : <></>}
        </div>
    )
}

export default Movie;