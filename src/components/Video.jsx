const Video = ({trailer}) => {
    return (
        <iframe src={`https://www.youtube.com/embed/${trailer}?autplay=1`} 
            frameBorder="0"
            allow="autoplay"
            title="video"
            height={200}
            width={500}
            allowFullScreen>
            </iframe> 
    )
}

export default Video;