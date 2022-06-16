import Movies from "../components/Movies";

const Dashboard = ({movies, getMovies}) => {

  return (
    <div className="dashboard-container">
      <Movies movies={movies} getMovies={getMovies} />
    </div>
  );
};

export default Dashboard;
