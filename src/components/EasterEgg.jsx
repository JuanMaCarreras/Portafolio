import confetti from 'canvas-confetti'
function EasterEgg () {
  const handleConfettiClick = () => {
    const options = {
      startVelocity: 30,
      particleCount: 400,
      spread: 360,
      ticks: 60,
      zIndex: 100
    }

    confetti(options)
  }

  return (
    <>
      <button onClick={handleConfettiClick}>
        .
      </button>
    </>
  )
}

export default EasterEgg
