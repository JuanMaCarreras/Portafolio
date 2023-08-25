import { DiHtml5, DiCss3, DiNodejsSmall, DiGit, DiGithubBadge } from 'react-icons/di'
import { SiReact, SiRedux, SiTailwindcss, SiExpress, SiSequelize, SiMysql, SiInsomnia, SiSlack, SiJavascript } from 'react-icons/si'
import { BiLogoPostgresql, BiLogoTrello } from 'react-icons/bi'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function Skills () {
  return (
    <>
      <article id='skills'>
        <div className='py-4 mb-36'>
          <h3 className='text-title dark:text-second font-mono text-3xl font-semibold ml-36 mt-14 pt-16 phone:flex phone:items-start phone:ml-7 phone:text-2xl phone:mt-4 tablet:ml-12'>Habilidades</h3>

          <h1 className='flex dark:text-white text-2xl justify-start mt-14 ml-44 mr-96 border-b border-text dark:border-white phone:ml-9 phone:mt-11 phone:mr-20 phone:text-lg tablet:ml-24'>Front-End</h1>
          <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark phone:ml-9 phone:mt-0  phone:gap-0 phone:py-1  phone:pr-2 phone:mr-20 phone:grid phone:grid-cols-3 tablet:ml-24 tablet:pt-2'>

            <Tippy content='HTML' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <DiHtml5 className=' text-text dark:text-textDark h-14 w-14 hover:duration-1000 hover:text-H dark:hover:text-H phone:w-7' />
              </span>
            </Tippy>

            <Tippy content='CSS' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <DiCss3 className='text-text dark:text-textDark  h-14 w-14 hover:duration-1000 hover:text-C dark:hover:text-C  phone:w-7' />
              </span>
            </Tippy>

            <Tippy content='JavaScript' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiJavascript className='text-text dark:text-textDark h-11 w-11 hover:duration-1000 mt-1 hover:text-J dark:hover:text-J  phone:w-6' />
              </span>
            </Tippy>

            <Tippy content='React' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiReact className='text-text dark:text-textDark mb-2 h-14 w-11 hover:duration-1000 hover:text-R dark:hover:text-R  phone:w-7' />
              </span>
            </Tippy>

            <Tippy content='Redux' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiRedux className='text-text dark:text-textDark h-14 w-11 hover:duration-1000 hover:text-RD dark:hover:text-RD  phone:w-7' />
              </span>
            </Tippy>

            <Tippy content='TailwindCSS' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiTailwindcss className='text-text dark:text-textDark h-14 w-12 hover:duration-1000 hover:text-T dark:hover:text-T  phone:w-7' />
              </span>
            </Tippy>
          </div>

          <h1 className='flex dark:text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b border-text dark:border-white phone:mr-6 phone:ml-20 phone:text-lg tablet:mr-24'>Back-End</h1>
          <div className='flex justify-end mb-4 ml-96 mr-44 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark phone:mr-6 phone:ml-20 phone:p-2 phone:mb-1 tablet:mr-24 tablet:pt-2'>
            <Tippy content='Node.js' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <DiNodejsSmall className='text-text dark:text-textDark  h-16 w-16 hover:duration-1000 hover:text-N dark:hover:text-N phone:w-9 tablet:w-12' />
              </span>
            </Tippy>

            <Tippy content='Express' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiExpress className='text-text dark:text-textDark h-16 w-16 hover:duration-1000 hover:text-GH dark:hover:text-white phone:w-9 tablet:w-12' />
              </span>
            </Tippy>
            <Tippy content='Sequelize' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiSequelize className='text-text dark:text-textDark h-12 w-12 mt-2 hover:duration-1000 hover:text-S dark:hover:text-S phone:w-9 tablet:w-11' />
              </span>
            </Tippy>
          </div>

          <h1 className='flex dark:text-white text-2xl justify-start mt-5 ml-44 mr-96 border-b border-text dark:border-white phone:ml-9 phone:mt-6 phone:mr-20 phone:text-lg tablet:ml-24'>Data Base</h1>
          <div className='flex justify-start mb-4 ml-44 mr-96 gap-6 py-8 px-5 border-t-8 border-mainLight dark:border-mainDark phone:ml-9 phone:mt-0 phone:p-2 phone:pt-0 phone:mr-20 tablet:ml-24 tablet:pt-2'>

            <Tippy content='PostgresSQL' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <BiLogoPostgresql className='text-text dark:text-textDark h-16 w-16 hover:duration-1000 hover:text-P dark:hover:text-P phone:w-9 tablet:w-11' />
              </span>
            </Tippy>
            <Tippy content='MySQL' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiMysql className='text-text dark:text-textDark h-16 w-16 hover:duration-1000 hover:text-MY dark:hover:text-MY phone:w-9 tablet:w-11' />
              </span>
            </Tippy>
          </div>

          <h1 className='flex dark:text-white text-2xl justify-end mt-5 ml-96 mr-44 border-b border-text dark:border-white phone:mr-6 phone:ml-20 phone:text-lg tablet:mr-24'>Extras</h1>
          <div className='flex justify-end ml-96 mr-44 gap-5 py-8 px-5 border-t-8 border-mainLight pb-11 dark:border-mainDark  phone:mr-6 phone:ml-20 phone:p-2 phone:pt-1 tablet:mr-24 tablet:pt-2 '>

            <Tippy content='Git' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <DiGit className='text-text dark:text-textDark h-16 w-16 hover:duration-1000 hover:text-G dark:hover:text-G phone:w-9 tablet:w-12' />
              </span>
            </Tippy>

            <Tippy content='GitHub' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <DiGithubBadge className='text-text dark:text-textDark h-16 w-16 hover:duration-1000 hover:text-GH dark:hover:text-GH phone:w-9 tablet:w-12' />
              </span>
            </Tippy>
            <Tippy content='Insomnia' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiInsomnia className='text-text dark:text-textDark h-12 w-12 mt-2 hover:duration-1000 hover:text-I dark:hover:text-I phone:w-7 tablet:w-10' />
              </span>
            </Tippy>
            <Tippy content='Slack' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <SiSlack className='text-text dark:text-textDark pt-2 h-12 w-12 mt-1 hover:duration-1000 hover:text-GH dark:hover:text-slate-50 phone:w-6 tablet:w-9' />
              </span>
            </Tippy>

            <Tippy content='Trello' arrow={false} className='bg-shadow text-black  dark:bg-gray-950 dark:text-white'>
              <span>
                <BiLogoTrello className='text-text dark:text-textDark pt-0 h-14 w-14 mt-1 hover:duration-1000 hover:text-TRE dark:hover:text-TRE phone:w-6 tablet:w-9' />
              </span>
            </Tippy>

          </div>
        </div>
      </article>
    </>
  )
}

export default Skills
