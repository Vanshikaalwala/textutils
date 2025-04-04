import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleSwitch= ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0c083d';
      showAlert("You have enabled dark mode","success");
      document.title='TextUtils- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("You have enabled light mode","success");
      document.title='TextUtils- Light Mode';
    }
  }

  return (
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleSwitch={toggleSwitch} />
    <Alert alert={alert} />
    <div className="container">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={<TextArea showAlert={showAlert} heading="Enter your text here to analyze" mode={mode} />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
