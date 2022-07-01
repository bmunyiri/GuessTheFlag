import React, {useContext} from 'react'
import {flagsContext} from '../Helpers/Context'
import WorldMap from '../Helpers/Images/World.png'


export default function Quit() {
const { flags, setFlags, score, setScore } = useContext(flagsContext);


  return (
    <div className="main">
     <h2>Your Total Score:{score} Of {flags.length+1}</h2>
     <h3>Thank You For Playing</h3>
     <img src={WorldMap} alt="World-Map" className="World-Map" />
    
     <button onClick={()=>{
       setFlags("Home")
       }} className="end-button">Play Again</button>
    </div>


  );
}
