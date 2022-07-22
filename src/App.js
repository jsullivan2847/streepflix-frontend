import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import UserSelect from "./pages/UserSelect";
import UserEdit from "./pages/UserEdit";
import UserAdd from "./pages/UserAdd";
import FavoritePage from "./pages/FavoritePage";
import { useState, useEffect } from "react";

function App() {

  //API CALL FROM BACKEND/////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  const URL = "https://back-streep-end.herokuapp.com/user/";

  const [profiles, setProfiles] = useState([]);

  const getProfiles = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProfiles(data);
  };

  const editProfile = async (person, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getProfiles();
  };

  // const editUserList = async (id, favorite) => {
  //   await fetch(URL + id, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "Application/json",
  //     },
  //     body: JSON.stringify(favorite),
  //   });
  //   getProfiles();
  //   console.log(favorite);
  // };

  const createProfile = async (profile) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    getProfiles();
  };

  const deleteProfile = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    getProfiles();
  };

  useEffect(() => {
    getProfiles();
  }, []);

  //USER SELECT FOR LOGGIN IN////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [myProfile, setMyProfile] = useState(null);
  const selectMyProfile = (id) => {
    const profile = profiles.find((p) => p._id === id);
    setMyProfile(profile);
  };

   //API CALL TO MOVIE API//////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //global States
  const [moviesState, setMoviesState] = useState(null);
  const [trailer, setTrailer] = useState(null);

  //This function will get passed down to movies, lift up
  //trailer state and pass that back down to display in the header
  const displayTrailer = (trailer) => {
    setTrailer(trailer);
  };

  const API_KEY = "9a7f92208080c78b13a3339d7394e0ee";
  const merylID = "5064";

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
    getMovies();
  }, []);

  //FAVORITES/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
  // const [favorites, setFavorites] = useState({})

  // console.log(favorites);

  // const updateFavorites = (movie) => {
  //       // const newFavoriteMovie = [...favorites, movie]
  //       // setFavorites(newFavoriteMovie)
  //       // saveToLocalStorage(newFavoriteMovie)
  //       // console.log(...favorites.title)

  //       setFavorites({list:[{
  //         title: movie.title,
  //         image: movie.poster_path
  //       }]});
  //       editUserList(myProfile,favorites);
  // }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard
            trailer={trailer}
            movies={moviesState}
            getMovies={getMovies}
            // profiles={profiles}
            displayTrailer={displayTrailer}
            myProfile={myProfile}
          />
        </Route>
        <Route
          path="/login"
          render={(rp) => (
            <UserSelect
              profiles={profiles}
              selectUser={selectMyProfile}
              {...rp}
            />
          )}
        />
        <Route
          path="/new"
          render={(rp) => <UserAdd createProfile={createProfile} {...rp} />}
        />

        <Route path="/favorites">
          <FavoritePage displayTrailer={displayTrailer} getMovies={getMovies} />
        </Route>

        <Route
          path="/:id/edit"
          render={(rp) => (
            <UserEdit
              {...rp}
              editProfile={editProfile}
              profiles={profiles}
              deleteProfile={deleteProfile}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
