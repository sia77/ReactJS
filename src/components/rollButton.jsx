import React from 'react';


export default function RollButton(props){
    return(
        <button className='roll-button' onClick={props.handler}>{!props.tenzies? "Roll":"New Game"}</button>
    )
}