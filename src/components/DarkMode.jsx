import { BsFillSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { useState } from 'react'

function DarkMode () {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const changeDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <>
      <button onClick={changeDarkMode}>
        {
         isDarkMode
           ? (
             <BsFillSunFill className='w-5 h-5 mt-1 ' />
             )
           : (
             <FaMoon className='w-5 h-5 mt-1' />
             )
        }

      </button>

    </>
  )
}

export default DarkMode
