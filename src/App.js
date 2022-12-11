import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Pages/Signup'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Login from './Components/Login/Login';

import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>

      <Router>

        <Route exact path={'/'}><Home /></Route>
        <Route path={'/signup'}> <Signup /></Route>
        <Route path={'/login'}><Login /></Route>
        <Route path={'/create'}><Create /></Route>
        <Route path={'/viewpost'}><ViewPost /></Route>
        


      </Router>

    </div>
  );
}

export default App;
