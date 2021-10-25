import logo from './logo.svg';
import './App.css';
import TextUtils from './TextUtiles/TextUtils';
import DarkMode from './DarkMode/DarkMode';
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Alert from './Alert/Alert'
import react, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message)=>{
    setAlert({
      type : type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null);
    }, 700);
  }

  const [mode, setMode] = useState('light');

  const [myStyle, setStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })

  const changeMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // document.title = 'dark'
      showAlert("success", "Dark mode enabled");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setStyle({
        color : 'white',
        backgroundColor : 'black'
      })
    }
    else{
      setMode('light');
      // document.title = 'light'
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setStyle({
        color : 'black',
        backgroundColor : 'white'
      })
      showAlert("warning", "Dark mode disabled");
    }
  }

  return (
    <>
    <Router>
        <Navbar mode={mode} myStyle={myStyle} changeMode={changeMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route path="/home">
            <TextUtils mode={mode} myStyle={myStyle}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        {/* <DarkMode/> */}
      </Router>
    </>
  );
}

export default App;
