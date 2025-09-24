import React from 'react'

export default function Timer({timeLeft}) {

    return (
        <>
        <div className='flex-col justify-center items-center mt-45 mb-10 mr-20'>
        <h2 className='text-white text-xl font-bold mb-5 text-center'>Remaining Time</h2>
        <div className={`h-25 w-50 flex justify-center items-center bg-black opacity-40 rounded-lg shadow-2xl ${(timeLeft <= 5 && timeLeft > 0) ? 'blink' : 'bg-black opacity-40'}`}>
            <p className='text-white text-xl'>{timeLeft} seconds</p>
        </div>
        </div>
       </> 
    )
}