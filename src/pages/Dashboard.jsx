import Movies from "../components/Movies";

const Dashboard = ({movies, getMovies, displayTrailer}) => {

  return (
    <div className="dashboard-container">
      <Movies displayTrailer={displayTrailer} movies={movies} getMovies={getMovies} />
    </div>
  );
};

export default Dashboard;
