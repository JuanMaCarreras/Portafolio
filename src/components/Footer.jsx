import { Link } from 'react-router-dom'
import { GoMail } from 'react-icons/go'
import { LuFileSpreadsheet } from 'react-icons/lu'

function Footer () {
  return (
    <footer className='flex flex-col justify-center items-center pt-24 pb-11 mt-20 bg-footer dark:bg-mainDark bottom-0 w-full '>
      <div>
        <p className='flex items-center font-mono text-lg my-7 dark:text-white'>
          <GoMail className='w-6 h-6 mr-3' /> manuucarreras@gmail.com
        </p>

        <Link to='/curriculum_PDF'>
          <button
            className='flex font-mono items-center ml-7 pb-9 dark:text-white'
          > <LuFileSpreadsheet className='w-6 h-6 mr-3' /> Curriculum Vitae
          </button>
        </Link>

      </div>

      <div className='border-t border-gray-800 my-8 w-full dark:border-gray-500' />

      <p className='mt-auto mb-0 dark:text-white phone:text-sm '>&copy; {new Date().getFullYear()} Manuel Carreras. Todos los derechos reservados.</p>

    </footer>
  )
}

export default Footer
