
import React, {useContext,useState} from 'react'

import {flagsContext} from '../Helpers/Context'

import FlagsInfo from '../Helpers/FlagData'


  export default function Main() {

   

const [currentFlag, setCurrentFlag] = useState(0)
const {flags,setFlags}=useContext(flagsContext)

  

  return (
    <div className="Main">

    <h2>{FlagsInfo[currentFlag].image}</h2>

  

    <div id="Options">

    <button>{FlagsInfo[currentFlag].optionA}</button>
 <button>{FlagsInfo[currentFlag].optionB}</button>
    <button>{FlagsInfo[currentFlag].optionC}</button>
    <button>{FlagsInfo[currentFlag].optionD}</button>

    
    
    </div>

   
    </div>


  );
}
