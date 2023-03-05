import React, {Component} from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from '@/router/router';
 

function App() {
  const Outlet=useRoutes(routes)
  return (
    <div className="App">
      {Outlet}
    </div>
  );
}
  


export default App;
