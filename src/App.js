import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import HomePage from './Homepage/Homepage';

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" render={()=><HomePage/>}></Route>
      </BrowserRouter>
  );
}

export default App;

