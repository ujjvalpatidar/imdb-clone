import React from 'react'
import { useState, useEffect } from 'react';
import TopRated from "./TopRated";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([])
  

  useEffect(() => {
    getDataTo()
}, [])

const getDataTo = () => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
  .then(res => res.json())
  .then(data => setPopularMovies(data.results))
// console.log(
//           "🚀 ~ file: Popular.js ~ line 12 ~ getData ~ popularMovies",
//           popularMovies,
//         );}
}
  return (
<>
  <div className='card-mian'>
  <h1 className='heading-Popular-main'>POPULAR</h1>
    {
      popularMovies.map((movie) => {
        return (
          <TopRated movie={movie}/>
        )
      })
    }
  </div>
</>  )
}

export default Popular;