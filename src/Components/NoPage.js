import React from 'react'
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className='Erorr-page-main'>
      <h1>404</h1>
      <h3>PAGE NOT FOUND</h3>
      <p>The page you are looking for does not exixt</p>
      <Link to="/">
        <button className='Eror-btn'>GO TO HOME</button>
      </Link>
    </div>
  )
}

export default NoPage;