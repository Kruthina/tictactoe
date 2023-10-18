import React, { Component } from 'react';

const Square = ({value,onClick}) => {
    const style = value ?'Squares ${value}' : 'Squares'
   
    return(
        <button className={style}> onClick = {onClick}
        {value}
        </button>
    );


};

export default Square;