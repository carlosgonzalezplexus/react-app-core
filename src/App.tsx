import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import { routes } from './routes';

const  App = () =>  {
  const router = createBrowserRouter(routes, { basename: '/' });
  return (
    <div className="App">
      <RouterProvider fallbackElement={<p>Loading...</p>} router={router} />
    </div>
  );
}

export default App;
