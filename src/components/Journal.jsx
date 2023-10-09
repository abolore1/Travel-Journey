import React from 'react';
// import images from '../assets/mountain.jpg'
import locationIcon from '../assets/locationIcon.png'

function Journal(props) {
  // console.log(props)

  return (
    <div className='Journal-component'>
      <div className='inner'>
      <div className="img-section">
        <img src={`${props.imgUrl}`}  alt="imgUrl" />
      </div>
      <div className="content-section">
        <img src={locationIcon} alt="location-icon" />
        <h3>{props.location}</h3>
        <a href={`${props.imgUrl}`} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
      </div>
      </div>
      <h2>{props.title}</h2>
        <span>{props.startDate} -</span><span className='endDate'> {props.endDate}</span>
        <p className='description'>{props.description}</p>
      
       
    </div>
  )
}

export default Journal