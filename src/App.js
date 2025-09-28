// This is the topmost parent component of this game for now which holds  all the logical states of the game and passes them as props to child components.

import {useState,useEffect} from 'react';
import './Css/final.css';
import Board from './Components/Board';
import ButtonsPane from './Components/ButtonsPane';
import Timer from './Components/Timer';
import Header from './Components/Header';

function App() {

    // Player X === true, Player O === false
    const [players, setPlayers] = useState(true);
    const [cells, setCells] = useState(Array(9).fill(null));
    const [bgColor, setBgColor] = useState(Array(9).fill("bg-slate-200"));
    const [disable, setDisable] = useState(Array(9).fill(false));
    const [timeLeft, setTimeLeft] = useState(15);

    // It will store the history of moves played in the game.
    const [history, setHistory] = useState([]);
   
//    useEffect to update timer and stop if the cells are disabled (i.e game over).
    useEffect(() => {
        if(disable.every(cell => cell === true)){
            return;
        }

        if (timeLeft <= 0) {
            // If time runs out player is switched (other player won) and cells are disabled (game over).
            setPlayers((prev) => !prev);
            setDisable(Array(9).fill(true));
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev>0)? prev - 1 : prev);
        }, 1000);
        return () => clearInterval(timer);

    }, [timeLeft, disable]);

    // useEffect to check for winning conditions after every move (i.e whenever cells state changes).
    useEffect(() => {
        if(cells[0] !== null && cells[0] === cells[1] && cells[1] === cells[2]){
            const temp = [...bgColor];
            temp[0] = "bg-emerald-500";
            temp[1] = "bg-emerald-500";
            temp[2] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[3] !== null && cells[3] === cells[4] && cells[4] === cells[5]){
            const temp = [...bgColor];
            temp[3] = "bg-emerald-500";
            temp[4] = "bg-emerald-500";
            temp[5] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[6] !== null && cells[6] === cells[7] && cells[7] === cells[8]){
            const temp = [...bgColor];
            temp[6] = "bg-emerald-500";
            temp[7] = "bg-emerald-500";
            temp[8] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[0] !== null && cells[0] === cells[3] && cells[3] === cells[6]){
            const temp = [...bgColor];
            temp[0] = "bg-emerald-500";
            temp[3] = "bg-emerald-500";
            temp[6] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[1] !== null && cells[1] === cells[4] && cells[4] === cells[7]){
            const temp = [...bgColor];
            temp[1] = "bg-emerald-500";
            temp[4] = "bg-emerald-500";
            temp[7] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[2] !== null && cells[2] === cells[5] && cells[5] === cells[8]){
            const temp = [...bgColor];
            temp[2] = "bg-emerald-500";
            temp[5] = "bg-emerald-500";
            temp[8] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[0] !== null && cells[0] === cells[4] && cells[4] === cells[8]){
            const temp = [...bgColor];
            temp[0] = "bg-emerald-500";
            temp[4] = "bg-emerald-500";
            temp[8] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells[2] !== null && cells[2] === cells[4] && cells[4] === cells[6]){
            const temp = [...bgColor];
            temp[2] = "bg-emerald-500";
            temp[4] = "bg-emerald-500";
            temp[6] = "bg-emerald-500";
            setBgColor(temp);
            setDisable(Array(9).fill(true));
        }else if(cells.every(cell => cell !== null)){
            setBgColor(Array(9).fill("bg-red-500"));
            setDisable(Array(9).fill(true));
        }
    }, [cells]);


    // Function to handle a player move when a cell is clicked.
    // It updates the cells state, history state, switches players and resets timer.
    const Gamepad = (index) => {
        if(cells[index] !== null) return;

        const temp = [...cells];
        const hist = [...history];

        // update values.
        temp[index] = players ? 'X' : 'O';
        hist.push({index: index, player: players ? 'X' : 'O'});
        // Trying to debug history issue
        console.log("History after adding something: " + JSON.stringify(hist));
        // set values.
        setCells(temp);
        setHistory(hist);
        // Switch players
        setPlayers(prev => !prev);
        // Reset timer
        setTimeLeft(15);
    }

    // Function to reset the game to initial state.
    const resetGame = () => {
        setCells(Array(9).fill(null));
        setBgColor(Array(9).fill("bg-slate-200"));
        setDisable(Array(9).fill(false));
        setPlayers(true);
        setTimeLeft(15);
        setHistory([]);
    }

// Function to undo the last move played.
    const undo = () => {
        if(history.length === 0) return;
        const hist = [...history];
        const temp = [...cells];
        // Remove the last move from history and update cells accordingly.
        const lastMove = hist.pop();
        temp[lastMove.index] = null;
        // Set values.
        setCells(temp);
        setHistory(hist);
        // Switch players back.
        setPlayers(prev => !prev);
        setTimeLeft(15);
        setDisable(Array(9).fill(false));
        setBgColor(Array(9).fill("bg-slate-200"));
    }
  
// Function to replay the game from the start showing each move with a delay.
// It disables the cells during replay and enables them back after replay is done.
// It is not working and has bugs, taking lots of time to debug, will fix it later.
    const replay = () => {
        if(history.length === 0) return;

        // const temp = [...history];

        // console.log("history just before replay: " + temp);

        // setCells(Array(9).fill(null));
        // setBgColor(Array(9).fill("bg-slate-200"));
        // setDisable(Array(9).fill(true));
        // let i = 0;

        //   setCells((prevCells) => {
        //     const newCells = [...prevCells];
        //     newCells[temp[0].index] = temp[0].player;
        //     return newCells;
        //     });
        // i++;

        // const interval = setInterval(() => {
        //     console.log("Inside Interval");

        //     if(i >= temp.length){
        //         clearInterval(interval);
        //         setDisable(Array(9).fill(false));
        //         return;
        //     }

        //     setCells((prevCells) => {
        //         const newCells = [...prevCells];
        //         newCells[temp[i].index] = temp[i].player;
        //         return newCells;
        //     });

        // console.log("value of i: " + i + " played index: " + temp[i].index + " played player: " + temp[i].player);

        // i++;
        // }, 1000);

    }


  return (
    <div className="bg-slate-900 h-screen w-screen p-0 m-0">
    <div className="justify items-start flex-row h-auto w-auto mt-0 p-0">
      <Header NameOfGame="Tic Tac Toe"/>
      <h2 className='pt-10 pb-20 pr-20 h-16 w-full text-white text-2xl font-bold text-center'>Player: {players ? 'X' : 'O'}</h2>
      <div className=" justify-center flex h-full w-screen p-0">
        <Timer timeLeft={timeLeft}/>
        <Board players={players} cells={cells} Gamepad={Gamepad} bgColor={bgColor} disable={disable} />
        <ButtonsPane resetGame={resetGame} undo={undo} replay={replay} />
      </div>
    </div>
    </div>
  );
}

export default App;
