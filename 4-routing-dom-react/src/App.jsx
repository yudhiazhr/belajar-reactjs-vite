import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/Notfound'

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        {/* PAGES TIDAK DIKETAHUI ( 404 Not found!) */}
        <Route path='*' element={<NotFound/>}/>
        

      </Routes>
    </Router>
  )
}

export default App
