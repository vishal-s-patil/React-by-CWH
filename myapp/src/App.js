// import logo from './logo.svg';
import './App.css';
import TextUtils from './TextUtiles/TextUtils';
import DarkMode from './DarkMode/DarkMode';
import react, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const changeMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
    <TextUtils changeMode={changeMode} mode={mode}/>
    {/* <DarkMode/> */}
    </>
  );
}

export default App;
