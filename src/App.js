import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height,setheight]=useState(180);
  const [Weight ,setweight]=useState(70);
  function onweightchange(e){
    setweight(e.target.value);

  }
  function onheightchange(e){
    setheight(e.target.value)

  }
  const output=useMemo(()=>{
    const calculateheight=height/100;
    return(Weight/(calculateheight*calculateheight)).toFixed(1)

  },[Weight,height])
  

  return (
    <div>
      <h1>BMI CALCULATER</h1>
      <div className='input-sec'>
        <p className='slid-out'>Weight:{Weight}Kg</p>
        <input className='input-slid' type='range'
            step="1"
            min="40"
            onChange={onweightchange}
            max="200"/>
        <p className='slider-out'>Height:{height}Cm</p>
        <input className='input-slid' type='range'
        onChange={onheightchange}
        min="140"
        max="220"/>
      </div>
      <div className='out-sec'>
        <p>Your BMI is </p>
        <p className='output'>{output} </p>
        
      </div>
      
    </div>
  )
}

export default App
