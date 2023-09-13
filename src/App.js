import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import './App.css';

import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
function App() {
  const [mode, setMode] = useState('light');  //whether dark mode enabled or not

  const toggleMode1 = ()=>{
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'black';//black
        document.body.style.color='white';//white
        showAlert("dark mode enabled","success");
        // document.title ="TEXTTOOLS - DARK MODE"

        // setInterval(()=>{
        //   document.title ="TEXTTOOLS is amazing!";
        // },500)

        // setInterval(()=>{
        //   document.title ="Install TEXTTOOLS!";
        // },1000)

      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color='black';
        showAlert("light mode enabled","success");
      }
  }

  const toggleMode2 = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#233D00';//black
      document.body.style.color='#D7FFA2';//white
      showAlert(" dark green mode enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#D7FFA2';
      document.body.style.color='#233D00';
      showAlert("light green mode enabled","success");
    }
}

  const [alert, setAlert] =useState(null);
  
  const showAlert = (message,type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  return (
    <>
      {/* <Navbar title="TEXTTOOLS" about="AboutTextTOOLS"/> */}
      <Router>
      <Navbar title="TEXTTOOLS" mode={mode}  toggleMode1={toggleMode1} toggleMode2={toggleMode2} alert={alert}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
     
        <div className="container">
        <Routes>
         
         <Route exact path="/" element= {<Textform heading="TEXTTOOLS - Word counter, Character counter, Remove Extra Spaces" className="my-4" mode={mode}  showAlert={showAlert}/>} />
         
         <Route exact path="/about" element={<About mode={mode}  />} /> 

       </Routes>
       {/* <Textform heading="Enter Text To Analyze" mode={mode}  showAlert={showAlert}/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
