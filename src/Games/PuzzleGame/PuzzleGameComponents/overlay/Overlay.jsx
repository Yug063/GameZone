import React from 'react'
import "./Overlay.css"
const Overlay = () => {
  return (
    Array(16).fill().map((_,i) => <div key={i} className='overlay'></div>)
  )
}

export default Overlay