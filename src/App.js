import './App.css';
import React, { useState } from 'react'
import Expiry from './components/Expiry';
import Home from './components/Home';
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  
 
    // const today = new Date();
    // const dd = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // console.log("Date Format :",dd);
   
    const a = new Date(2021, 11, 23)  // when current date is greater than      expiry_date then condition will be false. 
    const b = new Date(2021, 11, 26) // expired_date
    console.log(a, b) 
 
  if(a.getFullYear() === b.getFullYear() && ((a.getMonth()<=b.getMonth()) && (a.getDate()<=b.getDate()) || a.getMonth()!=b.getMonth()))
  {
  return (
    
    <div>
      
      <Router>
        <Route exact path="/" component={Home}></Route> 
        <Route path="/about" component={About}></Route>

      </Router>
      <p id="dateformat"></p>
    </div>
    );
  }
  else
  {
  return (
   
    <div>
      
     <Expiry/>
    </div>
    );
  }
}

export default App;
