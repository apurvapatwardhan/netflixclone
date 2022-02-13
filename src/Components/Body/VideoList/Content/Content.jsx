import React from 'react'
import { useDispatch } from 'react-redux'
import playApiCall from '../../../../API/playApiCall'
import { playAction } from '../../../../State/action/action'
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
    first_air_date,
    name,
    id,
  } = details
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
    backgroundSize: 'cover',
    height: '600px',
  }

  const dispatch = useDispatch();

  const playHandler = (id) => {
    console.log('id');
    playApiCall(id, release_date, dispatch);
    dispatch(playAction(true));
  }

  return (
    <div className="content" style={style}>
      <div className="content-child">
        <h2 className="content-title">{original_title || name}</h2>
        <p className="content-release">
          Release Date:{' '}
          {new Date(release_date || first_air_date).toDateString()} Rating:{' '}
          {vote_average}
        </p>
        <p className="content-overview">{overview}</p>
        <div className="content-buttons">
          <button className="content-play" onClick={() => playHandler(id)}>
            Play
          </button>
          <button className="content-mylist" style={{ background: 'black' }}>
            MyList
          </button>
        </div>
      </div>
      <div className="content-image">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="image"
        />
      </div>
    </div>
  )
}

export default Content
