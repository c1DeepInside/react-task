import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './UI/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
