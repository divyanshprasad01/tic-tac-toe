import React from 'react';
import './Css/final.css';
import Board from './Components/Board';
import ButtonsPane from './Components/ButtonsPane';
import Timer from './Components/Timer';
import Header from './Components/Header';

function App() {
  return (
    <div className="bg-slate-900 h-screen w-screen p-0 m-0">
    <div className="justify items-start flex-row h-auto w-auto mt-0 p-0">
      <Header NameOfGame="Tic Tac Toe"/>
      <div className=" justify-center flex h-full w-screen p-0">
      <Timer seconds={10}/>
      <Board/>
      <ButtonsPane/>
    </div>
    </div>
    </div>
  );
}

export default App;
