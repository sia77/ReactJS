import React from 'react'
import Dice from './dice'
import Button from './rollButton';
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'; 


export default function MainBox(){
    
    const [diceArr, setDiceArr] = React.useState(initilizeArray());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(()=>{
        
        const allSelect = diceArr.every(die => die.status === true);
        const firstNum = diceArr[0].face;
        const allNumbersSame = diceArr.every(die =>  die.face === firstNum);
        
        if(allSelect && allNumbersSame){
            setTenzies(true);
        }

    }, [diceArr])

    function initilizeArray(){
        const dices = [];
        for(let i=0; i< 10 ; i++){
            dices.push({face:generateRandomNumbers(), status:false, id: nanoid()})
        }
        return dices;
    }

    function generateRandomNumbers(){
        return Math.floor(Math.random() * 6) + 1;
    }

    function updateDicesFace(){

        if(!tenzies){
            setDiceArr(oldFaceArr => 
                oldFaceArr.map( die => 
                    (!die.status)? {...die, face:generateRandomNumbers()} : die              
                )            
            )
        }else{
            setDiceArr(initilizeArray())
            setTenzies(false);
        }

    }

    function selectDice(id){ 
        
        setDiceArr(oldFaceArr => {
            return oldFaceArr.map(die => (id === die.id ? {...die, status:!die.status}: die));
        });
    }

    function generateDices(){        
        return diceArr.map( ((el, index) => <Dice key={el.id} obj={el} selectDice={selectDice} />)) 
    }

    return (

        <div className="mainBox">
            {tenzies && <Confetti /> }
            <div className="whiteBox">
                <div className='textArea'>
                    <div className='title'>Tenzies</div>
                    <div className='text'>
                        Roll until all dice are the same. 
                        Click each die to freeze it at its current value between rolls.
                    </div>
                </div>
                <div className="game-area">
                    <div className='dice_row'>
                    {
                        generateDices()
                    }
                    </div>

                </div>
                <div className='button-cotainer'>
                    <Button handler={updateDicesFace} tenzies={tenzies} />
                </div>
            </div>
        </div>
    );
}
