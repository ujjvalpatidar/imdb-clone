import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Movie from './Movie'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { useMovieContext } from './Context'


const MovieList = () => {
  const [movieList, setMovieList] = useState([])

    const {type} = useParams();
   
    useEffect(() => {
      getData()
  }, [])

    useEffect(() =>{
        getData();
    },[type])


     const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
     }


  return (
<>
<div>
  <h1 className='heading-main'>{type ? type.toUpperCase() : "POPULAR"}</h1>
</div>
 
        <div className="card-mian">
{
  movieList.map((movie) => {
  
    return (
    <Movie movie={movie}/>
    )
  })
}
</div>
</>  )
}

export default MovieList;