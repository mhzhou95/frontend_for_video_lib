import React from 'react';
import NavBar from './components/nav/NavBar';
import Searchbar from './components/nav/SearchBar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Upload from './components/pages/Upload';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Searchbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/upload" component={Upload}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Switch>   
      </Router>
  );
}

export default App;
