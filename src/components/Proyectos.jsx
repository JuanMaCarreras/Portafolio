import infoPro from '../assets/infoPro'

function Proyectos () {
  return (
    <>
      <article id='proyectos'>
        <div className='mt-20 px-32 pt-24 pb-24 bg-mainLight dark:text-white dark:bg-mainDark'>
          <h3 className='text-title font-mono text-3xl font-semibold dark:text-second text-end mt-11 mr-20 mb-9'>Proyectos </h3>
          {infoPro.map((data) => {
            return (
              <article
                key={data.id}
                className='gap-4 bg-slate-100 dark:bg-mainDark'
              >
                <div className='flex flex-col shadow-lg px-4 py-9 mb-16'>
                  <h1 className='text-2xl my-8 ml-6 border-b-2 border-text dark:border-b dark:border-white pb-1'>{data.titulo}</h1>
                  <div className='flex flex-row'>
                    <img
                      className='w-1/3 mx-11 mb-16 order-first rounded-md border-solid border-2 border-gray-600 hover:border-slate-950 dark:border-slate-200/30 p-1 transition dark:hover:border-slate-200/50'
                      src={data.img}
                      alt='Imagen del proyecto'
                    />
                    <p className=' w-2/3 order-last mt-3 text-text dark:dark:text-textDark pr-11'>{data.info}</p>
                  </div>

                  <div className='mb-11 ml-20 text-start '>
                    <a className='inline-block border-b border-transparent hover:duration-1000 hover:border-b hover:border-title dark:hover:border-second' href={data.repo} target='_blank' rel='noreferrer'>Repositorio</a>
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
