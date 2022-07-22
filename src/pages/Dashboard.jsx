import Movies from "../components/Movies";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

const Dashboard = ({movies, getMovies, displayTrailer, trailer, myProfile}) => {

  const history = useHistory();

  if (myProfile){return (
    <div className="dashboard-container">
      <Header trailer={trailer} user={myProfile}/>
      <Movies displayTrailer={displayTrailer} movies={movies} getMovies={getMovies} />
    </div>
  );
  } else{
    history.push('/login')
  }
};

export default Dashboard;
