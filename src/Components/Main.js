
import React, {useContext,useState} from 'react'

import {flagsContext} from '../Helpers/Context'

import FlagsInfo from '../Helpers/FlagData'


  export default function Main() {

   
const {flags,setFlags,score,setScore}=useContext(flagsContext)


const [currentFlag, setCurrentFlag] = useState(0)
const [currentAnswer, setCurrentAnswer] = useState("")

  const MoveForward = ()=>{
 if (FlagsInfo[currentFlag].correct === currentAnswer){
setScore(score+1)
  }
setCurrentFlag(currentFlag +1)
  }

  return (
    <div className="Main">

    <img src={FlagsInfo[currentFlag].image} className="flag" alt="" />

  

    <div id="Options">
<h2>Which Country does the above flag represent ?</h2>
    <button onClick={()=>{
       setCurrentAnswer("a")
          }}>{FlagsInfo[currentFlag].optionA}</button>
 <button onClick={()=>{
       setCurrentAnswer("b")
          }} >{FlagsInfo[currentFlag].optionB}</button>
    <button onClick={()=>{
       setCurrentAnswer("c")
          }} >{FlagsInfo[currentFlag].optionC}</button>
    <button onClick={()=>{
       setCurrentAnswer("d")
          }} >{FlagsInfo[currentFlag].optionD}</button>
      
      <button  onClick={MoveForward} className="home-button">Next Flag</button>
    </div>
 
    </div>


  );
}
