import React, {useContext} from 'react'

import {flagsContext} from '../Helpers/Context'







  export default function Quit() {


const {flags,setFlags}=useContext(flagsContext)


  return (
    <div className="main">
     <button onClick={()=>{
       setFlags("Quit")
       
     }} className="start-button">Start3</button>
    </div>


  );
}
