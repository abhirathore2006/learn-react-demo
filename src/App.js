import React, {useState} from 'react'
import './App.css';
import {BackgroundSwitcher} from './components/BackgroundSwitcher';

function App() {
  let [active, setActive] = useState('');
  function handleClick(color) {
    document.body.style.backgroundColor = color;
    setActive(color);
  }

  return (
    <div className="App">
      <BackgroundSwitcher color="red" active={active} handleClick={handleClick} />
      <BackgroundSwitcher color="green" active={active} handleClick={handleClick}/>
      <BackgroundSwitcher color="blue" active={active} handleClick={handleClick} />
    </div>
  );
}

export default App;
