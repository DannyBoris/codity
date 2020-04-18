import React from 'react';
import  {BrowserRouter as Router, Route, Switch}  from 'react-router-dom'

import './helpers.css'
import './reset.css'
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import AuthContextProvider from './contexts/AuthContext';

 const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <AuthContextProvider>
          <Register/>
      </AuthContextProvider>
      <Router>
        <Switch>
          {/* <Route to='/' component={}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
