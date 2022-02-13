import React from 'react'
import './VideoPlay.css'
import { useDispatch, useSelector } from 'react-redux'
import { playAction } from '../../../../../State/action/action'

function VideoPlay(props) {
  const dispatch = useDispatch()
  console.log(props.playKey, 'playKey')
  return (
    <div>
      <iframe
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${props.playKey}?autoplay=1`}
      ></iframe>
    </div>
  )
}

export default VideoPlay
