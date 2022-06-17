import Movie from "./Movie";
const Movies = ({movies, getMovies}) => {

    const loaded = () => {
        if(movies){
            //dont know why this is the only 
            //way it would work lol
            const {cast} = movies;
            return cast.map((movie,index) => {
                //Stops app from rendering Movie components
                //with broken poster links
                if(movie.poster_path){
                    return  <Movie movie={movie} key={index}/>
                }      
        });
        }

    }
    return loaded()
}

export default Movies;