import { DiHtml5, DiCss3, DiNodejsSmall, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiReact, SiRedux, SiTailwindcss, SiExpress, SiSequelize, SiMysql, SiInsomnia, SiSlack, SiJavascript } from 'react-icons/si'
import { BiLogoPostgresql } from 'react-icons/bi'

function Skills () {
  return (
    <>
      <article id='skills'>
        <h3 className='text-title dark:text-second font-mono text-3xl font-semibold ml-36 mt-32 phone:flex phone:items-start phone:ml-7 phone:text-2xl  phone:mt-4'>Habilidades</h3>

        <h1 className='flex dark:text-white text-2xl justify-start mt-20 ml-44 mr-96 border-b border-text dark:border-white phone:ml-9 phone:mt-11 phone:mr-20 phone:text-lg'>Front-End</h1>
        <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark phone:ml-9 phone:mt-0  phone:gap-0 phone:py-1  phone:pr-2 phone:mr-20 phone:grid phone:grid-cols-3 '>

          <DiHtml5 className=' text-text dark:text-textDark h-14 w-14 hover:duration-700 hover:text-H dark:hover:text-H phone:w-7' />
          <DiCss3 className='text-text dark:text-textDark  h-14 w-14 hover:duration-700 hover:text-C dark:hover:text-C  phone:w-7' />
          <SiJavascript className='text-text dark:text-textDark h-11 w-11 hover:duration-700 mt-1 hover:text-J dark:hover:text-J  phone:w-6' />
          <SiReact className='text-text dark:text-textDark mb-2 h-14 w-11 hover:duration-700 hover:text-R dark:hover:text-R  phone:w-7' />
          <SiRedux className='text-text dark:text-textDark h-14 w-11 hover:duration-700 hover:text-RD dark:hover:text-RD  phone:w-7' />
          <SiTailwindcss className='text-text dark:text-textDark h-14 w-12 hover:duration-700 hover:text-T dark:hover:text-T  phone:w-7' />
        </div>

        <h1 className='flex dark:text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b border-text dark:border-white phone:mr-6 phone:ml-20 phone:text-lg'>Back-End</h1>
        <div className='flex justify-end mb-4 ml-96 mr-44 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark phone:mr-6 phone:ml-20 phone:p-2 phone:mb-1'>

          <DiNodejsSmall className='text-text dark:text-textDark  h-16 w-16 hover:duration-700 hover:text-N dark:hover:text-N phone:w-9' />
          <SiExpress className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-GH dark:hover:text-white phone:w-9' />
          <SiSequelize className='text-text dark:text-textDark h-12 w-12 mt-2 hover:duration-700 hover:text-S dark:hover:text-S phone:w-9' />
        </div>

        <h1 className='flex dark:text-white text-2xl justify-start mt-5 ml-44 mr-96 border-b border-text dark:border-white phone:ml-9 phone:mt-6 phone:mr-20 phone:text-lg'>Data Base</h1>
        <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark phone:ml-9 phone:mt-0 phone:p-2 phone:pt-0 phone:mr-20'>

          <BiLogoPostgresql className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-P dark:hover:text-P phone:w-9' />
          <SiMysql className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-MY dark:hover:text-MY phone:w-9' />
        </div>

        <h1 className='flex dark:text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b border-text dark:border-white phone:mr-6 phone:ml-20 phone:text-lg'>Extras</h1>
        <div className='flex justify-end ml-96 mr-44 gap-5 py-8 px-5 border-t-8 border-mainLight pb-11 dark:border-mainDark  phone:mr-6 phone:ml-20 phone:p-2 phone:pt-1 '>

          <DiGit className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-G dark:hover:text-G phone:w-9' />
          <DiGithubBadge className='text-text dark:text-textDark h-16 w-16 hover:duration-700 hover:text-GH dark:hover:text-GH phone:w-9' />
          <SiInsomnia className='text-text dark:text-textDark h-12 w-12 mt-2 hover:duration-700 hover:text-I dark:hover:text-I phone:w-7' />
          <SiSlack className='text-text dark:text-textDark pt-2 h-12 w-12 mt-1 hover:duration-700 hover:text-GH dark:hover:text-slate-50 phone:w-6' />
        </div>

      </article>
    </>
  )
}

export default Skills
