import React from 'react'
import { useMovieContext } from './Context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { Dna } from  'react-loader-spinner'


const MovieCarousel = () => {
  const { isLoading, carosuleMovies } = useMovieContext();

  if (isLoading) {
    return <div><Dna
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  /></div>;
  }
  return (
    <>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        transitionTime={2}
        showStatus={false}>
        {
          carosuleMovies.map((CurElem) => {
            return (<NavLink to={`/movie/${CurElem.id}`} key={CurElem.id}>
              <div className='poster-main'><img src={`https://image.tmdb.org/t/p/original${CurElem && CurElem.backdrop_path}`} />
              </div>
<div className='poster-details'>
  <h1 className='poster-title'>{CurElem.title}</h1>
  <div className='release-date'>
  <p className='date-contain'>{CurElem.release_date}</p>
  <p>{CurElem.vote_average}</p>
<AiFillStar className='rating-icon'/>
  </div>
<div className='poster-overview-d'>
<p className='poster-overview'>{CurElem.overview.slice(0,250) + "..."}</p>

</div>
</div>

            </NavLink>
            )
          })
        }
      </Carousel>


    </>
  )
}

export default MovieCarousel;