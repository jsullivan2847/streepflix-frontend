import Movies from "../components/Movies";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [movieState, setMovieState] = useState(null);

  const API_KEY = "98e3fb1f";

  const getMovie = async (searchTerm) => {
    //send request to API
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=mamma-mia`
    );
    //stores response from API in data variable
    const data = await response.json();

    //sets movie state with the data retrieved
    setMovieState(data);
  };


  useEffect(() => {
    getMovie();
  }, []);



  console.log(movieState);

  return (
    <div className="dashboard-container">
      <Movies />
    </div>
  );
};

export default Dashboard;
