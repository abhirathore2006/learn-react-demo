import { useState } from 'react';
import CustomButton from './CustomButton';
import './App.css';
import Dialog from './Dialog';

function App() {
  const [theme, updateTheme] = useState(true);
  document.body.style.backgroundColor = theme ? 'white' : 'black';
  return (
    <div className='container'>
      <div>
        <CustomButton
          className="custom-button theme-button"
          onClick={() => { updateTheme(!theme); }}
          text='Switch Theme'
        />
      </div>
      <Dialog theme={theme} />
    </div>
  );
}

export default App;
