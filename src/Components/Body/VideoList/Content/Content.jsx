import React from 'react'
import './Content.css'
function Content({ details }) {
  const {
    poster_path,
    original_title,
    overview,
    title,
    popularity,
    release_date,
    vote_average,
  } = details
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
    backgroundSize: 'cover',
    height: '600px',
    backgroundPosition: '0px -200px',
  }
  return (
    <div className="content" style={style}>
      <div className="content-child">
        <h1 className="content-title">{original_title}</h1>
        <p className="content-release">
          Release Date: {new Date(release_date).toDateString()}  Rating:{' '}
          {vote_average}
        </p>
        <p className="content-overview">{overview}</p>
        <div className="content-buttons">
          <button className="content-play">Play</button>
          <button className="content-mylist" style={{background:"black"}}>MyList</button>
        </div>
      </div>
    </div>
  )
}

export default Content
