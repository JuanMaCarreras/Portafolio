import { DiHtml5, DiCss3, DiJavascript1, DiNodejsSmall, DiPostgresql, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiReact, SiRedux, SiTailwindcss, SiExpress, SiSequelize, SiMysql, SiInsomnia } from 'react-icons/si'

function Skills () {
  return (
    <>
      <h3 className='text-3xl font-semibold text-second pl-44'> Habilidades</h3>
      <article className='flex  pt-24 pb-32'>

        <div className='justify-start pl-48'>
          <h4 className='text-2xl text-white pb-14'>Lenguajes</h4>

          <DiHtml5 className='text-white h-20 w-20 hover:duration-700 hover:text-H' />
          <DiCss3 className='text-white h-20 w-20 hover:duration-700 hover:text-C' />
          <DiJavascript1 className='text-white h-24 w-24 hover:duration-700 hover:text-J' />
        </div>

        <div className='justify-start pl-32'>
          <h4 className='text-2xl text-white pb-14'>Front-End</h4>

          <SiReact className='text-white mb-2 h-20 w-20 hover:duration-700 hover:text-R' />
          <SiRedux className='text-white h-16 w-20 hover:duration-700 hover:text-RD' />
          <SiTailwindcss className='text-white h-20 w-20 hover:duration-700 hover:text-T' />
        </div>

        <div className='justify-start pl-32'>
          <h4 className='text-2xl text-white pb-14'>Back-End</h4>

          <DiNodejsSmall className='text-white h-20 w-20 hover:duration-700 hover:text-N' />
          <SiExpress className='text-white h-20 w-20 hover:duration-700 hover:text-E' />
          <SiSequelize className='text-white h-16 w-20 hover:duration-700 hover:text-S' />
        </div>

        <div className='justify-start pl-32'>
          <h4 className='text-2xl text-white pb-14'>Data Base</h4>

          <DiPostgresql className='text-white h-20 w-20 hover:duration-700 hover:text-P' />
          <SiMysql className='text-white h-20 w-20 hover:duration-700 hover:text-MY' />
        </div>

        <div className='justify-center pl-32 '>
          <h4 className='text-2xl text-white pb-14'>Tools</h4>

          <DiGit className='text-white h-20 w-20 hover:duration-700 hover:text-G' />
          <DiGithubBadge className='text-white h-20 w-20 hover:duration-700 hover:text-GH' />
          <SiInsomnia className='text-white h-14 w-20 hover:duration-700 hover:text-I' />
        </div>

      </article>
    </>
  )
}

export default Skills
