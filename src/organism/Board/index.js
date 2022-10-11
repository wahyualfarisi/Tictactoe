import React from 'react'
import Sqare from './../../atoms/Square';
import { calculateWinner } from './../../utils';

export default function Board ({ 
  squares, 
  playerXisNext, 
  onUpdateSquare
}) {
  const handleSqureClick = (i) => {
    const squaresData = squares.slice();
    if (calculateWinner(squaresData) || squares[i]){
      return;
    }

    squaresData[i] = playerXisNext ? 'X' : 'O';
    onUpdateSquare({ squares: squaresData, xIsNext: !playerXisNext })
  }

  const renderSquare = (i) => {
    return (
      <Sqare 
        value={squares[i]} 
        onClick={() => handleSqureClick(i)}
      />
    )
  }

  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>  
  )
}
