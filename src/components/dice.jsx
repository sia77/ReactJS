import React from 'react';


export default function Dice(props){

    console.log("props.status: ", props.obj.status);
    const styles = {
        backgroundColor: props.obj.status ? "#59E391" : "white"
    }

    return (
        <div  
            onClick = {() => props.selectDice(props.obj.id) }
            className="dice_face" style={styles} data-index={props.index}>{props.obj.face}</div>
    )
}