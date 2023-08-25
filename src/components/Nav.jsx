import { useEffect, useState } from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import DarkMode from './DarkMode'
import EasterEgg from './EasterEgg'

function Nav () {
  const [showName, setShowName] = useState()

  useEffect(() => {
    const handlerScroll = () => {
      window.innerWidth < 713 ? setShowName(false) : setShowName(window.scrollY > 100)
    }

    window.addEventListener('scroll', handlerScroll)
    return () => {
      window.removeEventListener('scroll', handlerScroll)
    }
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full py-6 shadow-md backdrop-blur-lg bg-mainLight dark:bg-mainDark bg-opacity-90 ${showName ? 'show name' : ''} animate-fade-down animate-duration-[999ms]`}>
        <nav className=' dark:text-white '>
          {
            showName &&
              <div className=' flex items-center mt-1 absolute left-9 phone:left-0 phone:mt-2 phone:pt-0 tablet:mt-1 tablet:left-3 animate-fade-in'>
                <p className='font-semibold phone:text-base dark:text-white text-2xl ml-0'> Manuel Carreras </p>
              </div>
          }

          <ul className='flex justify-end gap-4 pb-2 pr-11 phone:gap-1 phone:pr-2 tablet:pr-2 animate-fade-down animate-duration-[1000ms]'>

            <li className='pt-1 phone:pt-2'>
              <a
                href='#root'
                className=' text-lg phone:text-sm font-semibold cursor-pointer hover:duration-700 hover:border-b hover:text-title dark:hover:text-second rounded-lg hover:bg-shadow2 dark:hover:bg-shadow3 dark:border-shadowB px-2 py-1'
              > Inicio
              </a>

            </li>

            <li className='pt-1 phone:pt-2'>
              <a
                href='#proyectos'
                className='text-lg phone:text-sm font-semibold cursor-pointer  hover:duration-700 hover:border-b hover:text-title dark:hover:text-second rounded-lg hover:bg-shadow2 dark:hover:bg-shadow3 dark:border-shadowB px-2 py-1'
              > Proyectos
              </a>
            </li>

            <li className='pt-1  phone:pt-2'>
              <a
                href='#skills'
                className='text-lg phone:text-sm font-semibold cursor-pointer hover:duration-700 hover:border-b hover:text-title dark:hover:text-second rounded-lg hover:bg-shadow2 dark:hover:bg-shadow3 dark:border-shadowB px-2 py-1'
              > Habilidades
              </a>

            </li>

            <li className='rounded-lg hover:bg-shadow2 dark:hover:bg-shadow3 px-2 py-1 hover:duration-700'>
              <a
                href='https://github.com/JuanMaCarreras'
                target='_blank'
                rel='noreferrer'
                className=''
              >
                <FiGithub
                  className='dark:text-white w-6 h-6 mt-1 hover:text-title dark:hover:text-second hover:duration-700 '
                />

              </a>
            </li>

            <li className='rounded-lg hover:bg-shadow2 dark:hover:bg-shadow3 px-2 py-1 hover:duration-1000'>
              <a
                href='https://www.linkedin.com/in/manuel-carreras/'
                target='_blank'
                rel='noreferrer'
              >
                <FiLinkedin
                  className='dark:text-white w-6 h-6 mt-1 hover:text-title dark:hover:text-second hover:duration-700 '
                />

              </a>
            </li>

            <li className='rounded-lg  hover:bg-shadow2 dark:hover:bg-shadow3 px-3 py-1 duration-1000'>

              <DarkMode />

            </li>

            <li className='text-transparent'>
              <EasterEgg />
            </li>

          </ul>
        </nav>

      </header>
    </>
  )
}

export default Nav
