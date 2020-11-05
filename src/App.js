import { useState } from 'react';
import CustomButton from './CustomButton';
import './App.css';
import Dialog from './Dialog';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, updateTheme] = useState(true);
  document.body.style.backgroundColor = theme ? 'white' : 'black';
  return (
    <div className='container'>
      <ThemeContext.Provider value={theme} >
        <div>
          <CustomButton
            className="custom-button theme-button"
            onClick={() => { updateTheme(!theme); }}
            text='Switch Theme'
          />
        </div>
        <Dialog/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
