import Movies from "../components/Movies";
import Header from "../components/Header";

const Dashboard = ({movies, getMovies, displayTrailer, trailer}) => {

  return (
    <div className="dashboard-container">
      <Header trailer={trailer}/>
      <Movies displayTrailer={displayTrailer} movies={movies} getMovies={getMovies} />
    </div>
  );
};

export default Dashboard;
