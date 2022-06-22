import Movies from "../components/Movies";
import Header from "../components/Header";
import { Link } from 'react-router-dom'

const Dashboard = ({movies, getMovies, displayTrailer, trailer, myProfile, updateFavorites}) => {

  if (myProfile){return (
    <div className="dashboard-container">
      <Header trailer={trailer}/>
      <Movies displayTrailer={displayTrailer} movies={movies} getMovies={getMovies} updateFavorites={updateFavorites}/>
    </div>
  );
  } else{
    return(
     <Link to="/login"> <h2>Please select a profile</h2></Link>
    )
  }
};

export default Dashboard;
