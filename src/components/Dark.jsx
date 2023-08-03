function Dark () {
  const changeDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <>
      <button className='' onClick={changeDarkMode}>Dark</button>

    </>
  )
}

export default Dark
