import { Navbar } from 'flowbite-react'
import { Sun, Moon } from 'phosphor-react'
import { useState } from 'react'



function Header(props) {

  const handleDark = props.handleDark

  return (
    <header className='bg-purple-500 '>
      <div className="max-w-[1120px] m-auto px-4 pt-8 pb-40 flex items-center justify-between">
        <strong className='text-white text-3xl'>Moneyrp</strong>
        <div className='flex gap-2'>
          <button className='text-white bg-purple-300 px-8 rounded h-12 block hover:brightness-75 transition'>Nova transacao</button>
          <button className='border-4 rounded-2xl px-2 dark:border-gray-900 transition-all' onClick={handleDark} >
            {props.darkToggle ? <Moon weight='bold' size={24} /> : <Sun weight='bold' size={24} color={'#fff'} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header