const Video = ({trailer}) => {
    return (
        <iframe src={`https://www.youtube.com/embed/${trailer}?autoplay=1`} 
            frameBorder="0"
            allow="autoplay"
            title="video"
            height={300}
            width={500}
            allowFullScreen>
            </iframe> 
    )
}

export default Video;