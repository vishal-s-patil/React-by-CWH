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

  const removeClassList = () => {
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  }

  const changeMode = (cls)=>{
    removeClassList();
    document.body.classList.add('bg-'+cls);
    if(cls === 'danger'){
      setStyle({
        color : 'white',
        backgroundColor : '#dc3545'
      })
    }
    else if(cls === 'primary'){
      setStyle({
        color : 'white',
        backgroundColor : '#007bff'
      })
    }
    else if(cls === 'warning'){
      setStyle({
        color : 'white',
        backgroundColor : '#ffc107'
      })
    }
    else if(cls === 'success'){
      setStyle({
        color : 'white',
        backgroundColor : '#198754'
      })
    }
    else if(cls === 'dark'){
      setStyle({
        color : 'white',
        backgroundColor : '#212529'
      })
      document.body.style.color = 'white';
    }
    else if(cls === 'light'){
      document.body.style.color = '#212529';
      setStyle({
        color : '#212529',
        backgroundColor : '#f8f9fa'
      })
    }
  }

  return (
    <>
    <Router>
        <Navbar mode={mode} myStyle={myStyle} changeMode={changeMode}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <TextUtils mode={mode} myStyle={myStyle}/>
          </Route>
          <Route exact path="/React-by-CWH">
            <TextUtils mode={mode} myStyle={myStyle}/>
          </Route>
          <Route exact path="/about">
            <About myStyle={myStyle}/>
          </Route>
        </Switch>
        {/* <DarkMode/> */}
      </Router>
    </>
  );
}

export default App;
