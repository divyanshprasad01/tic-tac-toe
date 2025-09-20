import Cells from './Cells'
import React, { use, useState } from 'react'


export default function Board() {

    const [players, setPlayers] = useState(true);
    const [cells, setCells] = useState(Array(9).fill(null));
    
    const Gamepad = (index) => {
        if(cells[index] !== null) return;

        const temp = [...cells];

        if(players){
            temp[index] = 'X';
            setCells(temp);
        }else{
            temp[index] = 'O';
            setCells(temp);
        }

        setPlayers(!players);
    }




    return (
        <>
        <div className="grid grid-cols-3 gap-4 w-140 h-140 justify-center items-center rounded-lg">
            <Cells player={cells[0]} onClick = {() => Gamepad(0)}/>
            <Cells player={cells[1]} onClick = {() => Gamepad(1)}/>
            <Cells player={cells[2]} onClick = {() => Gamepad(2)}/>
            <Cells player={cells[3]} onClick = {() => Gamepad(3)}/>
            <Cells player={cells[4]} onClick = {() => Gamepad(4)}/>
            <Cells player={cells[5]} onClick = {() => Gamepad(5)}/>
            <Cells player={cells[6]} onClick = {() => Gamepad(6)}/>
            <Cells player={cells[7]} onClick = {() => Gamepad(7)}/>
            <Cells player={cells[8]} onClick = {() => Gamepad(8)}/>
        </div>
        </>
    )
}
