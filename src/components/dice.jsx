import React from 'react';


export default function Dice(props){

    console.log("props.status: ", props.obj.status);
    const styles = {
        backgroundColor: props.obj.status ? "#59E391" : "white"
    }

    const className = `dice_face dice_face_${props.obj.face}`;
    const MAX_DOT_NUM = 9;
    const dots = Array.from({ length: MAX_DOT_NUM }, (value, index) => (
        <div key={index} className={`dot dot_${index}`}></div>
    ));


    return (
        <div  
            onClick = {() => props.selectDice(props.obj.id) }
            className={className} style={styles} data-index={props.index}>{dots}</div>
    )
}