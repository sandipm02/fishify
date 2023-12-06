import React from 'react';
import closeIcon from '../assets/closePNG.png';
import catchImage from '../assets/catch.png'
import '../styling/notifications-popup-group.css';

const NotificationsPopupCatch = ({ onClose }) => {
  return (
   <div className="spot-info-popup">
      {/* Close button with image */}
      
      <img className="closeimg" src={closeIcon} alt="Close" onClick={onClose} />
      <h2>UofC Fishing</h2>
      <p className="popup-catch-notes">I caught so many today!</p>
      <h5>Tags</h5>
      <div className="round-rectangle" style={{ backgroundColor: '#F5CCFF' }}>Fly Fishing</div>
      <div className="round-rectangle" style={{ backgroundColor: '#FFA1A1' }}>Intermediate</div> 
      {/* Round rectangle divs */}
      <h5>Species</h5>
      <div className="round-rectangle" style={{ backgroundColor: '#F5CCFF' }}>Trout</div>
      <div className="round-rectangle" style={{ backgroundColor: '#FFA1A1' }}>Walleyes</div>
      <h3 className='species'>Warnings</h3>
      <div className='info'>None</div>
      <img className="popup-location-image" src={catchImage} width={200} height={200} alt="location"/>
    </div> 
  );
};

export default NotificationsPopupCatch;