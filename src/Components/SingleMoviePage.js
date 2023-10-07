import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleMoviePage = (y) => {
    const [singleMovie, setSingleMovie] = useState([])
    const {id} = useParams();

    useEffect(() => {
        getSingleData();
    },[])

    const getSingleData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setSingleMovie(data))
    }
  return (
    <>
    <div className='Movie-detail-main'>
        <div className='move-detail-backdrop'>
            <img  className="movie-detail-img" src={`https://image.tmdb.org/t/p/original${singleMovie && singleMovie.backdrop_path}`} />
        </div>
        <div className='move-detail-poster-name'>
        <img className='move-detail-poster' alt="" src={`https://image.tmdb.org/t/p/original${singleMovie && singleMovie.poster_path}`} />
        </div>
        <div className='movies-details-main'>
            <h1 >{singleMovie? singleMovie.title : ""}</h1>
            <div className='single-movie-rating'>
                <p>{singleMovie? singleMovie.vote_average: ""}</p>
              <span className='fa'><i className="fas fa-star"/></span>
              <p>({singleMovie? singleMovie.vote_count : ""}) votes</p>
            </div>
            <div>
            <p>Release Date: {singleMovie? singleMovie.release_date : ""}</p>
            <p>{singleMovie? singleMovie.runtime : ""} mins</p>
            </div>
            <div>     {
                singleMovie && singleMovie.genres
                                ? 
                                singleMovie.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }</div>
        </div>
        <div className='single-movie-Synopsis'>
            <h3 className="gener-p">Synopsis</h3>
            <p className='gener-p'>{singleMovie? singleMovie.overview : ""}</p>
        </div>
        <div className='usefull-links'>
            <h2>Usefull Links</h2>
        <Link to={singleMovie? singleMovie.homepage : ""}
><button className='homepage-btn'>HOMEPAGE<i className="fa-solid fa-arrow-up-right-from-square" style={{color:'black', marginLeft:'2px'}}/></button>
        </Link>
        <Link to={`https://www.imdb.com/title/${singleMovie? singleMovie.imdb_id : ""}/`}
><button className='homepage-btn' style={{backgroundColor:'#F5C518'}}>IMDb<i className="fa-solid fa-arrow-up-right-from-square" style={{color:'black', marginLeft:'2px'}}></i></button>
        </Link>
        
        </div>
    </div>

    </>
  )
  }

export default SingleMoviePage;