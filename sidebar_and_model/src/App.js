import React from "react";
import Model from './Model';
import Home from './Home';
import Sidebar from './Sidebar';
import {links,social} from './data';
function App() {
  return (
    <>
      <Home/>
      <Model/>
      <Sidebar/>
    </>
  );
}

export default App;
