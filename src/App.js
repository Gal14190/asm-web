import React from 'react';
import { Link } from "react-router-dom";

import react_logo from './res/react.png';
import afeka_logo from './res/afeka.png';
import android_logo from './res/android.png';
import asm_logo from './res/asm.png';

import './App.css';
import MainBox from './components/MainBox';

function App() {
  return (
    <div className="App" style={{background: "none"}}>
      <div className='top-bar'>
        <div className="credit-name">Gal Ashkenazi</div>
        <Link to="/"><img src={asm_logo} /></Link>
        <img className='afeka-logo' src={afeka_logo} />
      </div>

      <header className="App-header">
        <MainBox />
      </header>

      <div className='bottom-bar'>
        <img className='android-logo' src={android_logo} />
        <img className='android-logo' src={react_logo} />
      </div>
    </div>
  );
}

export default App;
