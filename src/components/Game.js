import React, { Component, useState } from 'react';
import Board from './Board';
import {calculateWinner} from " ../helper";


const Game =() => {
    const[history,setHistory] = useState ([Array(9).fill(null)]);

    const[stepNumber,setStepNumber] = useState(0);
    const[xIsNext,setXisNext] = useState(true);
    const winner = 
}