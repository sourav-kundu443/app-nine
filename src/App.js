import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/userdetails/:id/:username/:email/:cname" component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
