import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Redes () {
  return (
    <>
      <ul className='fixed p-0 ml-10'>

        <li className='mb-4 '>
          <a
            href='https://github.com/JuanMaCarreras'
            target='_blank'
            className='flex items-center gap-2'
            rel='noreferrer'
          >
            <FaGithub
              className='text-white w-6 h-6 hover:text-second hover:duration-700  hover:w-8'
            />

          </a>
        </li>

        <li className='mb-4'>
          <a
            href='https://www.linkedin.com/in/manuel-carreras/'
            target='_blank'
            className='flex items-center gap-2'
            rel='noreferrer'
          >
            <FaLinkedin
              className='text-white w-6 h-6 hover:text-second hover:duration-700  hover:w-8'
            />

          </a>
        </li>

      </ul>

    </>
  )
}

export default Redes
