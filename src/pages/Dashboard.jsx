import Movies from "../components/Movies";
import Header from "../components/Header";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Dashboard = ({movies, getMovies, displayTrailer, trailer, myProfile, updateFavorites}) => {

  const history = useHistory();

  if (myProfile){return (
    <div className="dashboard-container">
      <Header trailer={trailer} user={myProfile}/>
      <Movies displayTrailer={displayTrailer} movies={movies} getMovies={getMovies} updateFavorites={updateFavorites} />
    </div>
  );
  } else{
    history.push('/login')
  }
};

export default Dashboard;
