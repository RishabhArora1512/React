import './App.css'; 
/*import navbar from components*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
  }

  const removeBgClass = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls)=>{
    removeBgClass();
    document.body.classList.add('bg-'+cls);
    if(mode ==='light'){
      setMode('dark');
      document.getElementById('nameChange').innerHTML = 'DisableDarkMode'
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.getElementById('nameChange').innerHTML = 'EnableDarkMode'
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleGreenMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.getElementById('nameChange').innerHTML = 'DisableDarkMode'
      document.body.style.backgroundColor ='green';
      showAlert("Green mode has been enabled", "success");
    }else{
      setMode('light');
      document.getElementById('nameChange').innerHTML = 'EnableDarkMode'
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleRedMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.getElementById('nameChange').innerHTML = 'DisableDarkMode'
      document.body.style.backgroundColor ='red';
      showAlert("Red mode has been enabled", "success");
    }else{
      setMode('light');
      document.getElementById('nameChange').innerHTML = 'EnableDarkMode'
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [btnText, setBtnText] = useState("Enable Dark Mode")

  setTimeout(() => {
    setAlert(null)
  }, 1500);
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode} btnText={btnText} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter a text to analyze" mode={mode}/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
