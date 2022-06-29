import React, {useContext} from 'react'
import {flagsContext} from '../Helpers/Context'


export default function Home() {


  const {flags,setFlags}=useContext(flagsContext)

  return (
    <div className="home">

      <h1>Welcome</h1>
      <br />
      <h2> Test Your  Knowledge Of World Coutries Flags</h2>
      <button onClick={()=>{
       setFlags("Main")
       
     }} className="main-button">Start</button>
    </div>
  );
}
