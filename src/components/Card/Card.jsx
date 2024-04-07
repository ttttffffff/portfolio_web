import React from 'react'
import './Card.css'

export default function Card({emoji,heading,detail}) {
  return (
    <div className="card">
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <br/>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>

    </div>
  )
}
