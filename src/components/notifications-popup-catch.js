import React from 'react';
import closeIcon from '../assets/closePNG.png';
import catchImage from '../assets/catch.png'
import '../styling/notifications-popup-group.css';

const NotificationsPopupCatch = ({ onClose }) => {
  return (
   <div className="spot-info-popup">      
      <img className="closeimg" src={closeIcon} alt="Close" onClick={onClose} />
      <h2>UofC fishing</h2>
      <h1 className='h1 edit'>I caught so many today!</h1>
      <h1 className='h1 edit2'>monmoyfisher</h1>
      <h5>Tags</h5>
      <div className="round-rectangle-1" style={{ backgroundColor: '#f75b5b' }}>Fly Fishing</div>
      <div className="round-rectangle-1" style={{ backgroundColor: '#c35bf7' }}>Intermediate</div> 
      <h5>Species</h5>
      <div className="round-rectangle-1" style={{ backgroundColor: '#5bf7d5' }}>Trout</div>
      <div className="round-rectangle-1" style={{ backgroundColor: '#5ba4f7' }}>Walleyes</div>
      <h3 className='species'>Warnings</h3>
      <div className='info'>None</div>
      <br></br>
      <img className="popup-location-image-1" src={catchImage} width={300} height={250} alt="location"/>
    </div> 
  );
};

export default NotificationsPopupCatch;