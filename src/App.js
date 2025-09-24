import {useState,useEffect} from 'react';
import './Css/final.css';
import Board from './Components/Board';
import ButtonsPane from './Components/ButtonsPane';
import Timer from './Components/Timer';
import Header from './Components/Header';

function App() {

    const [players, setPlayers] = useState(true);
    const [cells, setCells] = useState(Array(9).fill(null));
    const [bgColor, setBgColor] = useState(Array(9).fill("bg-slate-200"));
    const [disable, setDisable] = useState(Array(9).fill(false));
    const [timeLeft, setTimeLeft] = useState(15);
   
    useEffect(() => {
        if(disable.every(cell => cell === true)){
            return;
        }

        if (timeLeft <= 0) {
            setPlayers((prev) => !prev);
            setDisable(Array(9).fill(true));
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev>0)? prev - 1 : prev);
        }, 1000);
        return () => clearInterval(timer);

    }, [timeLeft, disable]);


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
        setTimeLeft(15);
    }

    const resetGame = () => {
        setCells(Array(9).fill(null));
        setBgColor(Array(9).fill("bg-slate-200"));
        setDisable(Array(9).fill(false));
        setPlayers(true);
        setTimeLeft(15);
    }

  


  return (
    <div className="bg-slate-900 h-screen w-screen p-0 m-0">
    <div className="justify items-start flex-row h-auto w-auto mt-0 p-0">
      <Header NameOfGame="Tic Tac Toe"/>
      <h2 className='pt-10 pb-20 pr-20 h-16 w-full text-white text-2xl font-bold text-center'>Player: {players ? 'X' : 'O'}</h2>
      <div className=" justify-center flex h-full w-screen p-0">
        <Timer timeLeft={timeLeft}/>
        <Board players={players} cells={cells} Gamepad={Gamepad} bgColor={bgColor} disable={disable} />
        <ButtonsPane resetGame={resetGame}/>
      </div>
    </div>
    </div>
  );
}

export default App;
