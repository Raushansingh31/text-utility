//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout ( ()=>{
      setAlert(null);
    }, 1000)
  }
  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='green';
      showAlert("Dark mode is enabled", "success");
      document.title='text -dark';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success");
      document.title='text -light';
    }
  }
  return (
    <>
        <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <div className='container'>
        <Routes>
          <Route exact path="/about" element={<AboutUs/>}>
          </Route>
          <Route exact path="/" element ={<Textform showAlert={showAlert} heading="uppercase convereter" mode={mode} />}>
          </Route>
        </Routes>
        {/*<Textform showAlert={showAlert} heading="uppercase convereter" mode={mode} />*/}
        </div>
        </Router>
    </>
  );
}

export default App;
