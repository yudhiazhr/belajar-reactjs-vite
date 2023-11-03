import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/myButton'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  // ini props
  const navText = "Sosmed";
  const navBar = "Navigation Bar";

  const clicked = () => {
    return alert("Button di pencet");
  }

  const paragraf = () => {
    return (
      <div>
        <h3>mantap bang</h3>
        <i> mantap bang </i>
        <marquee behavior="" direction="">Mantul pisan</marquee>
      </div>
    )
  };


  return (
    <>
   
      <div>
        {/* ini cara manggil props */}
      <Navbar navText={navText} navBar={navBar}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Belajar React + vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <MyButton clicked ={clicked} />
        <Footer paragraf ={paragraf}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
