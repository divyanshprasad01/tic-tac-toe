import React from 'react'

export default function Timer({seconds}) {
    return (
        <>
        <div className='flex-row justify-center items-center mt-45 mb-10 mr-20'>
        <h2 className='text-white text-xl font-bold mb-5 text-center'>Remaining Time</h2>
        <div className='h-25 w-50 flex flex-col justify-center items-center bg-black opacity-40 rounded-lg shadow-2xl'>
            <p className='text-white text-xl'>{seconds} seconds</p>
        </div>
        </div>
       </> 
    )
}