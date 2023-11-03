import React, { useState, useEffect } from 'react'
import './App.css'

function App() {

  /* kiri = getter
     kanan = setter  */
  const [pacarSaya, setPacarSaya] = useState(0);
  const [namaPacar, setNamaPacar] = useState ("");

  // useEffect
  useEffect(() => {
    if (pacarSaya === 1) {
      setNamaPacar("nadiah")
    } else if (pacarSaya === 2) {
      setNamaPacar("nurul") 
    } else if (pacarSaya === 3) {
      setNamaPacar ("hanin")
    } else if (pacarSaya === 0) {
      setNamaPacar("kasian ga punya pacar")
    } else {
      setNamaPacar("nadiah nurul hanin")
    }
  }, [pacarSaya])


  return (
    <>
    {/* useState */}
    <h2>nama pacar : {namaPacar}</h2>
      <h1>Saya memiliki: {pacarSaya} pacar</h1>
      <button onClick={() => {
          if (pacarSaya > 0) {
            setPacarSaya((prev) => prev - 1);
          } else {
            alert("Tidak bisa kurangi pacar lagi");
          }
        }}>Kurangi pacar</button>

      <button onClick={() => setPacarSaya((prev) => prev + 1)}>Tambah pacar</button>
    </>
  )
}

export default App
