import movieTrailer from "movie-trailer";
import { useState } from "react";
import Video from "./Video";
const Movie = ({movie, displayTrailer, getTrailer}) => {
    //Destructuring the movie info
    const {title, poster_path} = movie;
    //State for movie trailer
    const [trailer, setTrailer] = useState(null);
    //bas URL for poster src
    const posterURL = 'http://image.tmdb.org/t/p/w185'


    //retrieves movie specific trailer URL param
    // const getTrailer = () => {
    //    movieTrailer(title, {id: true}).then(trailerID => {
    //         setTrailer(trailerID);
    //     }).catch(error => console.log(error));
    // }

   
    //Loads youtube embed
    const trailerLoaded = () => {
        return (
            <Video trailer={trailer}/>
        )
    }

    //Loads movie poster and info
    const movieLoaded = () => {
        return ( <div className="posters-container">
            <img onClick={handleClick} src={posterURL + poster_path} alt={title + "poster"}/>
            <h5>{title}</h5> 
            </div>
        )
    }

    //To click trailer on and off
    const handleClick = (event) => {
        console.log(event.target);
        if(trailer){
            setTrailer(null);
            displayTrailer(trailer);
        }
        else{
            getTrailer(title);
            displayTrailer(trailer);
        }
    }

    // useEffect(() => {getTrailer()}, []);

    return(
        <div className="movie-container">
            {/* {trailer? trailerLoaded() : <></>} */}
            {movie? movieLoaded() : <></>}
        </div>
    )
}

export default Movie;