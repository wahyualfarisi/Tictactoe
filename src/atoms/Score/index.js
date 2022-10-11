import React from "react";

export default function Score({ text, score }){
  return(
    <div className='game-info-item'>
      <div className='text-white'>{text}</div>
      <div className='text-white'>{score}</div>
    </div>
  )
}