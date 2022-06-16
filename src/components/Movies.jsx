import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import Movie from "./Movie";
const Movies = ({movies, getMovies}) => {

   

    const loaded = () => {
        if(movies){
            const {cast} = movies;
            return cast.map((movie,index) => (
                <Movie movie={movie} key={index}/>
            ))
        }
        else{
            console.log('no movies :((')
        }
    }
    // const displayMovies = movies.map((movie, index) => {
    //     return <Movie title={movie.title} key={index}/>
    // })
    return loaded()
}

export default Movies;