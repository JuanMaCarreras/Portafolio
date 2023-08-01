import { useEffect, useState } from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

function Nav () {
  const [showName, setShowName] = useState()

  useEffect(() => {
    const handlerScroll = () => {
      window.scrollY > 100 ? setShowName(true) : setShowName(false)
    }

    window.addEventListener('scroll', handlerScroll)
    return () => {
      window.removeEventListener('scroll', handlerScroll)
    }
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full py-6 shadow-md backdrop-blur-lg backdrop-filter bg-mainDark bg-opacity-90 ${showName ? 'show name' : ''}`}>
        <nav className=' text-white '>

          <ul className='flex justify-end gap-11 py-2 pr-16 text-lg'>

            {showName && <p className=' flex items-center text-white text-2xl absolute left-12  animate-fade-in'>Manuel Carreras </p>}

            <li
              className='text-base
              cursor-pointer
              border-b-1 border-transparent
              hover:duration-1000 hover:border-b-2 hover:border-second'
            ><a href='#root'> Inicio </a>

            </li>

            <li className='text-base
              cursor-pointer
              border-b-1 border-transparent
              hover:duration-1000 hover:border-b-2 hover:border-second'
            > <a href='#proyectos'> Proyectos </a>
            </li>

            <li className=' text-base
              cursor-pointer
              border-b-1 border-transparent
              hover:duration-1000 hover:border-b-2 hover:border-second'
            > <a href='#skills'>Habilidades </a>
            </li>

            <li>
              <a
                href='https://github.com/JuanMaCarreras'
                target='_blank'
                rel='noreferrer'
              >
                <FiGithub
                  className='text-white w-6 h-6 hover:text-second hover:duration-700 '
                />

              </a>
            </li>

            <li>
              <a
                href='https://www.linkedin.com/in/manuel-carreras/'
                target='_blank'
                rel='noreferrer'
              >
                <FiLinkedin
                  className='text-white w-6 h-6 hover:text-second hover:duration-700 '
                />

              </a>
            </li>

          </ul>
        </nav>

      </header>
    </>
  )
}

export default Nav
