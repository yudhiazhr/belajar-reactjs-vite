
import { useEffect } from 'react'
import './App.css'
import {getMovieList, searchMovie} from "./api"
import { useState } from 'react'

const App = () => {

  //variable penampung
  const [popularMovies, setPopularMovies] = useState ([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  
  //mengeluarkan isi movie nya dari penampungan
  const PopularMovieList = () => {
    return popularMovies.map((movie, i)=> {
      return (
          
          <div className="Movie-wrapper" key={i}>
            <div className="Movie-title">{movie.title}</div>
            <img 
              className="Movie-image" 
                src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${movie.poster_path}`} 
               />
            <div className="Movie-date">Release: {movie.release_date}</div>
            <div className="Movie-rate">⭐ {movie.vote_average}</div>
          </div>
        
      )
    })
  }

  const search = async (q) => {
    //validasi untuk tidak terkena rate limit
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>YUDHI MOVIE CUY!</h1>
        <input 
          placeholder='Cari film...' 
          className='Movie-search'
          onChange={ ({target}) => search(target.value)}
         />
        <div className="Movie-container">
           <PopularMovieList/>
        </div>
      </header>
    </div>
  )
}

export default App
