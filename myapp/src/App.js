// import logo from './logo.svg';
import './App.css';
import TextUtils from './TextUtiles/TextUtils';
import DarkMode from './DarkMode/DarkMode';
import Navbar from './Navbar/Navbar'
import react, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const [myStyle, setStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })

  const changeMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setStyle({
        color : 'white',
        backgroundColor : 'black'
      })
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setStyle({
        color : 'black',
        backgroundColor : 'white'
      })
    }
  }

  return (
    <>
    <Navbar mode={mode} myStyle={myStyle} changeMode={changeMode}/>
    <TextUtils changeMode={changeMode} mode={mode} myStyle={myStyle}/>
    {/* <DarkMode/> */}
    </>
  );
}

export default App;
