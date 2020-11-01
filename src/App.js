import React, {useEffect, useState} from 'react'
import './App.css';
import {BackgroundSwitcher} from './components/BackgroundSwitcher';

function App() {

  let [active, setActive] = useState('');

  useEffect(()=>{
    if(active) {
      document.body.style.backgroundColor = active;
    }
  }, [active])

  return (
    <div className="App">
      <BackgroundSwitcher color="red" active={active} setActive={setActive} />
      <BackgroundSwitcher color="green" active={active} setActive={setActive}/>
      <BackgroundSwitcher color="blue" active={active} setActive={setActive} />
    </div>
  );
}

export default App;
