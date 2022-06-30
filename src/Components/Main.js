
import React, {useContext,useState} from 'react'

import {flagsContext} from '../Helpers/Context'

import FlagsInfo from '../Helpers/FlagData'


  export default function Main() {

   

const [currentFlag, setCurrentFlag] = useState(0)
const {flags,setFlags}=useContext(flagsContext)

  

  return (
    <div className="Main">

    <img src={FlagsInfo[currentFlag].image} className="flag" alt="" />

  

    <div id="Options">
<h2>Which Country does the above flag represent ?</h2>
    <button>{FlagsInfo[currentFlag].optionA}</button>
 <button>{FlagsInfo[currentFlag].optionB}</button>
    <button>{FlagsInfo[currentFlag].optionC}</button>
    <button>{FlagsInfo[currentFlag].optionD}</button>
    
    </div>
 
    </div>


  );
}
