import './App.css';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import UserSelect from './pages/UserSelect';
import UserEdit from './pages/UserEdit';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/'>
        <Dashboard/>
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
