import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './ContentModal.css'
import { useDispatch, useSelector } from 'react-redux'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { showBackDropAction } from '../../../../State/action/action'

function ContentModal() {
  const details = useSelector((state) => state.contentDetails)
  const showBackDrop = useSelector((state) => state.showBackDrop)
  const dispatch = useDispatch()
  console.log(details)

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
                dispatch(showBackDropAction(false))
              }}
            >
              <h1>MODAL</h1>
            </SwipeableDrawer>,
            document.getElementById('modal'),
          )
        : null}
    </>
  )
}

export default ContentModal
