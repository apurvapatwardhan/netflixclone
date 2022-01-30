import React from 'react'
import ReactDOM from 'react-dom'
import "./Backdrop.css"

function BackdropChild() {
  return (
    <>
      <div className="backdrop-child"></div>
    </>
  )
}

function Backdrop() {
  return (
    <>{ReactDOM.createPortal(<BackdropChild />, document.getElementById('backdrop'))}</>
  )
}

export default Backdrop
