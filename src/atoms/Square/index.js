import React from 'react'

export default function Sqare({ value, onClick }) {
    return (
      <button className='square' onClick={onClick} >
        <span className='square-value'>{value}</span> 
      </button>
    )
}
