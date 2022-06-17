import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
const Movie = ({movie}) => {
    const {title, poster_path, backdrop_path, release_date} = movie;
    const [trailer, setTrailer] = useState('');
    const posterURL = 'http://image.tmdb.org/t/p/w185'

    const getTrailer = () => {
        const response = movieTrailer(title, {id: true}).then(trailerID => {
            setTrailer(trailerID);
        }).catch(error => console.log(error));
    }

   

    const trailerLoaded = () => {
        return (
            
            <iframe src={`https://www.youtube.com/embed/${trailer}?autplay=1`} 
            frameBorder="0"
            allow="autoplay"
            title="video"
            allowFullScreen>
            </iframe> 
        )
    }

    const movieLoaded = () => {
        return ( <div>
            <img onClick={handleClick} src={posterURL + poster_path} alt={title + "poster"}/> 
            <h5>{title}</h5>
            </div>
        )
    }

    const handleClick = () => {
        getTrailer();
    }

    // useEffect(() => {getTrailer()}, []);

    return(
        <div className="movie-container">
            {trailer? trailerLoaded() : <></>}
            {movie? movieLoaded() : <></>}
        </div>
    )
}

export default Movie;