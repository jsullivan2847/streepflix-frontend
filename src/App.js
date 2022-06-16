import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import UserSelect from './pages/UserSelect';
import UserEdit from './pages/UserEdit';
import { useState, useEffect } from 'react';

function App() {

  const [movieState, setMovieState] = useState(null);

  const API_KEY = "9a7f92208080c78b13a3339d7394e0ee";
  const merylID = '5064';

  const getMovies = async (searchTerm) => {
    //send request to API
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${merylID}/movie_credits?api_key=${API_KEY}&language=en-US
      `
    );
    //stores response from API in data variable
    const data = await response.json();

    //sets movie state with the data retrieved
    setMovieState(data);
  };

  useEffect(() => {getMovies()}, 
  []);

  return (
    <div className="App">
      <Nav/>
      <Route exact path='/'>
        <Dashboard movies={movieState} getMovies={getMovies}/>
      </Route>
      <Route path="/login">
        <UserSelect/>
      </Route>
      <Route path="/edit">
        <UserEdit/>
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
