function Header () {
  return (
    <>
      <nav className='border-b-4 border-mainDark bg-mainDark text-white'>
        <ul className='flex justify-end gap-10 py-8 pr-16 text-lg '>
          <li
            className='cursor-pointer
           border-b-2 border-transparent
           hover:duration-1000 hover:border-b-2 hover:border-second'
          >Inicio
          </li>

          <li className='cursor-pointer
            border-b-2 border-transparent
            hover:duration-1000 hover:border-b-2 hover:border-second'
          >Proyectos
          </li>

          <li className='cursor-pointer
            border-b-2 border-transparent
            hover:duration-1000 hover:border-b-2 hover:border-second'
          >Habilidades
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Header
