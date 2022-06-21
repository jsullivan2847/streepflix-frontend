import Movie from "./Movie";
import { useState } from "react";
import movieTrailer from "movie-trailer";
const Movies = ({movies, displayTrailer}) => {

    const [trailer, setTrailer] = useState(null);
    displayTrailer(trailer);

    const getTrailer = (title) => {
        movieTrailer(title, {id: true}).then(trailerID => {
             setTrailer(trailerID);
             
         }).catch(error => console.log(error))
     }
    const loaded = () => {
        if(movies){
            //dont know why this is the only 
            //way it would work lol
            const {cast} = movies;
            return cast.map((movie,index) => {
                //Stops app from rendering Movie components
                //with broken poster links
                if(movie.poster_path){
                    return  <Movie getTrailer={getTrailer}displayTrailer={displayTrailer} movie={movie} key={index}/>
                }      
        });
        }

    }
    return loaded()
}

export default Movies;