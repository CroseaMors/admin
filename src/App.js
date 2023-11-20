import { useState } from "react";
import Topbar from './Topbar2.png';
import Building from './TopbarBuild2.png';
import './App.css';

const App = () => {
  return (
    <div className="Topbar">
      <img className="Logo" src={Topbar} alt="Your Alt Text" />
      <img className="Building" src={Building} alt="Your Alt Text" />

      <div className="Navbar">
          
      </div>
    </div>
    
  );
  


}

export default App;