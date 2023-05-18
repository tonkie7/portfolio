import { useState } from 'react'
import { MdOutlineNightlightRound } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { RxCode } from 'react-icons/Rx'

const NavBar = ({ handleNightMode, nightMode }) => {

    return (
        <>
            <nav className='flex justify-between mb-10'>
                <div className='flex items-center'>
                    <RxCode className={`text-lg ${nightMode ? 'text-stone-300' : 'text-stone-700'}`} />
                    <div className={`ml-1 ${nightMode ? 'text-stone-300' : 'text-stone-700'}`}>dang</div>
                </div>
                <div className='flex'>
                    <button onClick={() => handleNightMode()} className='flex items-center mr-3'>{nightMode ? 
                    <BsSun className='text-stone-300 hover:text-stone-100' size={25} /> : <MdOutlineNightlightRound className='text-stone-700 hover:text-stone-900' size={25} />}</button>
                    <button className={`border border-stone-700 px-2 rounded-md
                    ${nightMode ? 'bg-stone-400 text-stone-200 hover:bg-stone-300 hover:text-stone-700' : 'hover:bg-stone-500 hover:text-stone-300'}`}>resume</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar