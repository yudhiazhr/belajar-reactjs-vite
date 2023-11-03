import React, {useState} from 'react'
import './App.css'
import NavigationBar from  "./components/NavigationBar"

// state adalah tempat penampungan data tipe apapun
function App() {

  // manggil usestate
  // getNavbarValue = kita mau dapetin nilai dari variable terakhir dari yang tereksekusi
  // setNavbarvalue = kita set nilai awal , dua atau tiga pada variable ini
  const [getNavbarValue, setNavbarvalue] = useState ("");

  
  const changeNavbarValue = () => {
    setNavbarvalue("My Contact");
  }

  const traceButton = () => {
    alert("mantapbor")
    console.log("button di click");
  }


  return (
    <div className='App'>
      <NavigationBar navValue={getNavbarValue}/>
      <h1>INI HOME PAGE</h1>
  
      <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
    </div>
  )
}

export default App
