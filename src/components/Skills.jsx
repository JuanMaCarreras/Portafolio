import { DiHtml5, DiCss3, DiNodejsSmall, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiReact, SiRedux, SiTailwindcss, SiExpress, SiSequelize, SiMysql, SiInsomnia, SiSlack, SiJavascript } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

function Skills () {
  return (
    <>
      <article id='skills'>
        <h3 className='text-title dark:text-second font-mono text-3xl font-semibold ml-36 mt-32 movil:flex movil:items-start movil:ml-7 movil:text-2xl  movil:mt-4'>Habilidades</h3>

        <h1 className='flex dark:text-white text-2xl justify-start mt-20 ml-44 mr-96 border-b border-text dark:border-white movil:ml-9 movil:mt-11 movil:mr-20 movil:text-lg'>Front-End</h1>
        <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark movil:ml-9 movil:mt-0  movil:gap-0 movil:py-1  movil:pr-2 movil:mr-20 movil:grid movil:grid-cols-3 '>

          <DiHtml5 className=' text-text dark:text-textDark h-14 w-14 hover:duration-700 hover:text-H dark:hover:text-H movil:w-7' />
          <DiCss3 className='text-text dark:text-textDark  h-14 w-14 hover:duration-700 hover:text-C dark:hover:text-C  movil:w-7' />
          <SiJavascript className='text-text dark:text-textDark h-11 w-11 hover:duration-700 mt-1 hover:text-J dark:hover:text-J  movil:w-6' />
          <SiReact className='text-text dark:text-textDark mb-2 h-14 w-11 hover:duration-700 hover:text-R dark:hover:text-R  movil:w-7' />
          <SiRedux className='text-text dark:text-textDark h-14 w-11 hover:duration-700 hover:text-RD dark:hover:text-RD  movil:w-7' />
          <SiTailwindcss className='text-text dark:text-textDark h-14 w-12 hover:duration-700 hover:text-T dark:hover:text-T  movil:w-7' />
        </div>

        <h1 className='flex dark:text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b border-text dark:border-white movil:mr-6 movil:ml-20 movil:text-lg'>Back-End</h1>
        <div className='flex justify-end mb-4 ml-96 mr-44 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark movil:mr-6 movil:ml-20 movil:p-2 movil:mb-1'>

          <DiNodejsSmall className='text-text dark:text-textDark  h-16 w-16 hover:duration-700 hover:text-N dark:hover:text-N movil:w-9' />
          <SiExpress className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-GH dark:hover:text-white movil:w-9' />
          <SiSequelize className='text-text dark:text-textDark h-12 w-12 mt-2 hover:duration-700 hover:text-S dark:hover:text-S movil:w-9' />
        </div>

        <h1 className='flex dark:text-white text-2xl justify-start mt-5 ml-44 mr-96 border-b border-text dark:border-white movil:ml-9 movil:mt-6 movil:mr-20 movil:text-lg'>Data Base</h1>
        <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark movil:ml-9 movil:mt-0 movil:p-2 movil:pt-0 movil:mr-20'>

          <BiLogoPostgresql className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-P dark:hover:text-P movil:w-9' />
          <SiMysql className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-MY dark:hover:text-MY movil:w-9' />
        </div>

        <h1 className='flex dark:text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b border-text dark:border-white movil:mr-6 movil:ml-20 movil:text-lg'>Extras</h1>
        <div className='flex justify-end ml-96 mr-44 gap-5 py-8 px-5 border-t-8 border-mainLight pb-11 dark:border-mainDark  movil:mr-6 movil:ml-20 movil:p-2 movil:pt-1 '>

          <DiGit className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-G dark:hover:text-G movil:w-9' />
          <DiGithubBadge className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-GH dark:hover:text-GH movil:w-9' />
          <SiInsomnia className='text-text dark:text-textDark h-12 w-12 mt-2 hover:duration-700 hover:text-I dark:hover:text-I movil:w-7' />
          <SiSlack className='text-text dark:text-textDark pt-2 h-12 w-12 mt-1 hover:duration-700 hover:text-GH dark:hover:text-slate-50 movil:w-6' />
        </div>

      </article>
    </>
  )
}

export default Skills
