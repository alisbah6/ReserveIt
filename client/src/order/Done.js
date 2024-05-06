import React from 'react';
import './Done.css'
import { } from 'react-router-dom'

function Done() {
  return (
    <div className='body'>
      <div class="card">
        <div>
          <i class="checkmark">✓</i>
        </div>
        <h1 className='h-done '>Success</h1>
        <p className='p-done'>We received your booking request;<br /> we'll be in touch shortly!</p>
        <a className="popup-goes" href="/Home">Thank You</a>
      </div>
    </div>
  )
}
export default Done
