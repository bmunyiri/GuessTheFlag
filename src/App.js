import "./styles.css";

import {useState, useContext} from 'react'
import Home from "./Components/Home"
import Main from "./Components/Main"
import Quit from "./Components/Quit"

import {flagsContext} from "./Helpers/Context"

export default function App() {

const [flags,setFlags] =useState("Home")

  return (
    <div className="App">

<flagsContext.Provider value={{flags,setFlags}}>
    {flags === "Home" && <Home />}
    {flags === "Main" &&  <Main />}
    {flags === "Quit" &&  <Quit />}
 </flagsContext.Provider>
    
     <button onClick={()=>{
       setFlags("Main")
       
     }} className="start-button">Start</button>
    </div>
  );
}
