import React from 'react'
import './FinalItem.css'
import { useLocation } from 'react-router-dom';
const FinalItem = () => {
  const location=useLocation();
  console.log(location);
  return (
    <div className='items'>
      <p>cart: {location.state.item}</p>
    </div>
  )
}

export default FinalItem