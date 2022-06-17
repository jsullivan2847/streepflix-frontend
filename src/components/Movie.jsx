import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import Video from "./Video";
const Movie = ({movie}) => {
    //Destructuring the movie info
    const {title, poster_path, backdrop_path, release_date} = movie;
    //State for movie trailer
    const [trailer, setTrailer] = useState('');
    //bas URL for poster src
    const posterURL = 'http://image.tmdb.org/t/p/w185'

    //retrieves movie specific trailer URL param
    const getTrailer = () => {
        const response = movieTrailer(title, {id: true}).then(trailerID => {
            setTrailer(trailerID);
        }).catch(error => console.log(error));
    }

   
    //Loads youtube embed
    const trailerLoaded = () => {
        return (
            
            // <iframe src={`https://www.youtube.com/embed/${trailer}?autplay=1`} 
            // frameBorder="0"
            // allow="autoplay"
            // title="video"
            // allowFullScreen>
            // </iframe> 
            <Video trailer={trailer}/>
        )
    }

    //Loads movie poster and info
    const movieLoaded = () => {
        return ( <div>
            <img onClick={handleClick} src={posterURL + poster_path} alt={title + "poster"}/>
            <h5>{title}</h5> 
            </div>
        )
    }

    //To click trailer on and off
    const handleClick = () => {
        if(trailer){
            setTrailer(null);
        }
        else{
            getTrailer();
        }
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