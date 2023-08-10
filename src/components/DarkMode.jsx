import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
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
             <BsFillSunFill className='w-5 h-5 mr-3 ' />
             )
           : (
             <BsMoonStarsFill className='w-4 h-4  mr-3' />
             )
        }

      </button>

    </>
  )
}

export default DarkMode
