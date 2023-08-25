import cvPath from '../assets/Carreras_Manuel_CV.pdf'

function Pdf () {
  return (
    <div className='absolute w-full h-full'>
      <object
        data={cvPath}
        type='application/pdf'
        width='100%' height='100%'
      />
    </div>
  )
}

export default Pdf
