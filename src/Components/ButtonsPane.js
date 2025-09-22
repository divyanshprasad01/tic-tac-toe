import undo_icon from '../Resources/undo_icon.svg'
import reset_icon from '../Resources/reset_icon.svg'
import replay_icon  from '../Resources/replay_icon.svg'

export default function ButtonsPane({resetGame, undo, replay}) {
   
    return (
        <div className='px-5 py-10 mt-15 ml-15 mr-40 h-110 w-35 flex flex-col justify-center items-center gap-4 bg-black opacity-40 rounded-lg shadow-2xl'>
            <button className="w-full h-full bg-blue-950 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-900" onClick={() => undo()}>
                <img src={undo_icon} alt="Undo" className='w-full h-full mb-5'/>
            </button>
            <button className="w-full h-full bg-blue-950 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-900" onClick={() => resetGame()}>
                <img src={reset_icon} alt="Reset" className='w-full h-full mb-5'/>
            </button>
            <button className="w-full h-full bg-blue-950 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-900" onClick={() => replay()}>
                <img src={replay_icon} alt="Replay" className='w-full h-full mb-5'/>
            </button>
        </div>
    )
}