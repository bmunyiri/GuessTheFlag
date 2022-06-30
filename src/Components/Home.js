import React, {useContext} from 'react'
import {flagsContext} from '../Helpers/Context'
import WorldMap from '../Helpers/Images/World.png'

export default function Home() {


  const {flags,setFlags}=useContext(flagsContext)

  return (
    <div className="home">

      <h1>Welcome</h1>
      <br />
      <h2> Test Your  Knowledge Of World Countries Flags</h2>
      <img src={WorldMap} alt="World-Map" className="World-Map" />
       
        <button  onClick={()=>{
       setFlags("Main")
          
     }} className="home-button">Start</button>
    </div>
  );
}
