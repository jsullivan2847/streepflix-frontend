const Movie = ({movie}) => {
    const posterURL = 'http://image.tmdb.org/t/p/w185'
    const {title, poster_path, backdrop_path, release_date} = movie;
    console.log(movie);
    return(
        <div className="movie-container">
            <img src={`${posterURL}${poster_path}`} alt={`${title} poster`} />
            <h5>{movie.title}</h5>
        </div>
    )
}

export default Movie;