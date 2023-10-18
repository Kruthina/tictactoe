import React, { Component } from 'react';
import Square from "./Square";

const Board = ({Squares,onclick}) => (
    <div className = "board">
        {Squares.map((Square,i)  =>(
            <Square key={i} value = {Square} onclick ={() => onclick(i)}/>
        ))}




    </div>
);
export default Board;

