import './App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import UserSelect from './pages/UserSelect';
import UserEdit from './pages/UserEdit';
import UserAdd from './pages/UserAdd';
import { useState, useEffect } from 'react';

function App() {

  const [profiles, setProfiles] = useState([]);
  const URL = "https://back-streep-end.herokuapp.com/user"

  const getProfiles =  async () => {
    const response = await fetch (URL);
    const data = await response.json();
    setProfiles(data);
  }

  const editProfile = async(person, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person)
    });
    getProfiles();
    };

  const createProfile =  async (profile) => {
      await fetch(URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(profile)
      });
      getProfiles();
    };

  useEffect(() => {getProfiles()}, []);

  //global States
  const [moviesState, setMoviesState] = useState(null);

  const [trailer, setTrailer] = useState(null);

  //This function will get passed down to movies, lift up 
  //trailer state and pass that back down to display in the header
  const displayTrailer = (trailer) => {
    setTrailer(trailer);
  }

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
    setMoviesState(data);
  };


  useEffect(() => {
    getMovies()
  }, 
  []);

  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
        <Dashboard 
        trailer={trailer}
        movies={moviesState} 
        getMovies={getMovies} 
        profiles={profiles} 
        displayTrailer={displayTrailer}
        />
      </Route>
      <Route path="/login">
        <UserSelect profiles={profiles}/>
      </Route>
      <Route path="/new" render={rp => (
        <UserAdd createProfile={createProfile} {...rp}/>
      )
      }/>
      <Route path="/:id/edit" render={(rp) => (
        <UserEdit {...rp} editProfile={editProfile} profiles={profiles} />
      )}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
