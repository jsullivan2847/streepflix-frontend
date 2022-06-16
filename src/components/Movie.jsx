const Movie = ({movie}) => {
    console.log(movie);
    return(
        <div className="movie-container">
            <h5>{movie.title}</h5>
        </div>
    )
}

export default Movie;