import React from 'react';
import world from '../assets/myjourney.png'

function Navbar() {
  return (
    <div className='Navbar'>
       <nav>
         <img src={world} alt="world-icon" />
         <p>my travel journal.</p>
       </nav>
    </div>
  )
}

export default Navbar