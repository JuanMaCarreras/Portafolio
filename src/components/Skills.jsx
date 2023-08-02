import { DiHtml5, DiCss3, DiNodejsSmall, DiPostgresql, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiReact, SiRedux, SiTailwindcss, SiExpress, SiSequelize, SiMysql, SiInsomnia, SiSlack, SiJavascript } from 'react-icons/si'

function Skills () {
  return (
    <>
      <article id='skills'>
        <h3 className='font-mono text-3xl font-semibold text-second pl-36 pt-32'>Habilidades</h3>

        <h1 className='flex text-white text-2xl justify-start mt-20 ml-44 mr-96 border-b'>Front-End</h1>
        <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainDark '>

          <DiHtml5 className='text-text h-14 w-14 hover:duration-700 hover:text-H' />
          <DiCss3 className='text-text  h-14 w-14 hover:duration-700 hover:text-C' />
          <SiJavascript className='text-text h-11 w-11 hover:duration-700 mt-1 hover:text-J' />
          <SiReact className='text-text mb-2 h-14 w-11 hover:duration-700 hover:text-R' />
          <SiRedux className='text-text h-14 w-11 hover:duration-700 hover:text-RD' />
          <SiTailwindcss className='text-text h-14 w-12 hover:duration-700 hover:text-T' />
        </div>

        <h1 className='flex text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b '>Back-End</h1>
        <div className='flex justify-end mb-4 ml-96 mr-44 gap-6 py-8 px-5 border-t-8 border-mainDark'>

          <DiNodejsSmall className='text-text h-16 w-16 hover:duration-700 hover:text-N' />
          <SiExpress className='text-text h-16 w-16 hover:duration-700 hover:text-white' />
          <SiSequelize className='text-text h-12 w-12 mt-2 hover:duration-700 hover:text-S' />
        </div>

        <h1 className='flex text-white text-2xl justify-start mt-5 ml-44 mr-96 border-b '>Data Base</h1>
        <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainDark'>

          <DiPostgresql className='text-text h-16 w-16 hover:duration-700 hover:text-P' />
          <SiMysql className='text-text h-16 w-16 hover:duration-700 hover:text-MY' />
        </div>

        <h1 className='flex text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b '>Extras</h1>
        <div className='flex justify-end mb-28 ml-96 mr-44 gap-5 py-8 px-5 border-t-8 border-mainDark'>

          <DiGit className='text-text h-16 w-16 hover:duration-700 hover:text-G' />
          <DiGithubBadge className='text-text h-16 w-16 hover:duration-700 hover:text-GH' />
          <SiInsomnia className='text-text h-12 w-12 mt-2 hover:duration-700 hover:text-I' />
          <SiSlack className='text-text pt-2 h-12 w-12 mt-1 hover:duration-700 hover:text-slate-50' />
        </div>

      </article>
    </>
  )
}

export default Skills
