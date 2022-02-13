import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ContentModal.css'
import { useDispatch, useSelector } from 'react-redux'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { playAction, showBackDropAction } from '../../../../State/action/action'
import Content from '../Content/Content'
import VideoPlay from '../Content/VideoPlay/VideoPlay'

function ContentModal() {
  const details = useSelector((state) => state.contentDetails)
  const showBackDrop = useSelector((state) => state.showBackDrop);
  const play = useSelector(state => state.play);
  const playKey = useSelector(state => state.playKey)
  const dispatch = useDispatch()
  console.log(details, "modal")

  useEffect(() => {
    document.body.style.overflowY = 'scroll'
  }, [showBackDrop])

  return (
    <>
      {showBackDrop
        ? ReactDOM.createPortal(
            <SwipeableDrawer
              anchor="bottom"
              open={showBackDrop}
              onOpen={() => {
                console.log('open')
                dispatch(showBackDropAction(true))
              }}
              onClose={() => {
                dispatch(showBackDropAction(false));
                dispatch(playAction(false))
              }}
              transitionDuration = {{enter: 1000, exit: 1000}}
            >
              {play ? <VideoPlay playKey={playKey}/> : <Content details={details}/>}
            </SwipeableDrawer>,
            document.getElementById('modal'),
          )
        : null}
    </>
  )
}

export default ContentModal
