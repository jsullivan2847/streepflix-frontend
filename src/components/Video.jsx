const Video = ({trailer}) => {
    return (
        <iframe src={`https://www.youtube.com/embed/${trailer}?autplay=1`} 
            frameBorder="0"
            allow="autoplay"
            title="video"
            allowFullScreen>
            </iframe> 
    )
}

export default Video;