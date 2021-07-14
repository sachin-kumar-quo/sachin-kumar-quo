import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import { GlobalProver } from './context/GlobalState';

function App() {
  return (
    <div className="App" style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProver>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' exact component={AddUser} />
            <Route path='/edit/:id' exact component={EditUser} />
          </Switch>
        </Router>
      </GlobalProver>
      
    </div>
  );
}
export default App;
