import React, { useState, useEffect } from 'react'
import Score from './atoms/Score';
import Board from './organism/Board';
import { calculateWinner } from './utils';

export default function Game() {

    const [squares, setSquare] = useState(Array(9).fill(null))
    const [playerXisNext, setPlayerXisNext] = useState(true);
    const [scores, setScores] = useState({ X: 0, O: 0, tie: 0 })

    useEffect(() => {
      const winner = calculateWinner(squares)

      if(winner){
        setScores((prevState) => ({
          ...prevState,
          [winner]: prevState[winner] + 1
        }))
        setSquare(Array(9).fill(null))
        setPlayerXisNext(true)
      }
    }, [squares])

    const updateSquares = (data) => {
      setSquare([...data.squares]);
      setPlayerXisNext(data.xIsNext)
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board 
            squares={squares}
            playerXisNext={playerXisNext}
            onUpdateSquare={(data) => updateSquares(data)}
          />
        </div>

        <div className='game-info'>
          <Score text={'PLAYER 1 (X)'} score={scores.X} />
          <Score text={'TIE'} score={scores.tie} />
          <Score text={'PLAYER 2 (O)'} score={scores.O} />
        </div>
      </div>
    )
}



