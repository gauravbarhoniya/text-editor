import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [alert, setalert] = useState(null);
  const [mode, setmode] = useState('light');
  const [btntext, setbtntext] = useState('Enable Dark Mode');
  const showalert = (type, message) => {
    setalert(
      {
        type: type,
        message: message
      },
      setTimeout(() => {
        setalert(null)
      }, 1000)
    )
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setbtntext('Enable Light Mode');
      document.body.style.backgroundColor = "#020f21"
    }
    else {
      setmode('light');
      setbtntext('Enable Dark Mode');
      document.body.style.backgroundColor = "#ffffff"
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} btntext={btntext} />
      <Textbox heading="Enter your text" mode={mode} showalert={showalert} alert={alert} />
      <About mode={mode} />
    </>
  );
}

export default App;