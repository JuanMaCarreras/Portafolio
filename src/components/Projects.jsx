import infoPro from '../assets/infoPro'

function Proyectos () {
  return (
    <>
      <article id='proyectos'>
        <div className='mt-20 px-32 pt-24 pb-24 phone:px-2 tablet:px-20 bg-mainLight dark:text-white dark:bg-mainDark'>
          <h3 className='text-title font-mono text-3xl font-semibold dark:text-second text-end mt-11 mr-20 mb-9 phone:flex phone:items-start phone:ml-5 phone:text-2xl phone:mt-4 tablet:mr-0'>Proyectos </h3>
          {infoPro.map((data) => {
            return (
              <article
                key={data.id}
                className=' bg-slate-100 dark:bg-mainDark'
              >
                <div className='flex flex-col shadow-lg px-6 py-9 mb-16 phone:px-2'>
                  <h4 className='text-xl my-8 ml-6 border-b border-text dark:border-b dark:border-white pb-1 phone:text-lg phone:ml-4 phone:mt-2'>{data.titulo}</h4>

                  <div className='flex flex-row  phone:flex-col phone:w-full tablet:flex-col tablet:w-full'>
                    <img
                      className='w-1/2 ml-8 phone:w-4/5 phone:ml-10 tablet:w-4/5 tablet:ml-16 rounded-md border-solid border-2 border-gray-600 hover:border-slate-950 dark:border-slate-200/30 p-1 transition dark:hover:border-slate-200/50'
                      src={data.img}
                      alt='Imagen del proyecto'
                    />

                    <p className='mt-4 ml-6 text-text dark:text-textDark phone:ml-1 phone:mt-8 phone:px-4 phone:text-base phone:text-center phone:whitespace-pre-line phone:break-words tablet:ml-1 tablet:mt-8 tablet:px-4 tablet:text-base tablet:text-center tablet:whitespace-pre-line tablet:break-words'>{data.info}</p>
                  </div>

                  <div className='my-11 ml-14 text-start phone:ml-8 phone:pt-7 phone:mb-3 tablet:mt-20'>
                    <a className='inline-block hover:text-title dark:hover:text-second  rounded-lg  hover:bg-shadow2 dark:hover:bg-shadow3 px-3 py-1.5 duration-1000 ' href={data.repo} target='_blank' rel='noreferrer'>Repositorio</a>
                  </div>
                </div>

              </article>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default Proyectos
