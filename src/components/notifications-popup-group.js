import React from 'react';
import closeIcon from '../assets/closePNG.png';
import '../styling/notifications-popup-group.css';

const group_members = [
    {name: "Mitchell Howe", role: "Creator"},
    {name: "Benjamin Brandt", role: "Admin"},
    {name: "Caroline Cline", role: "Member"},
    {name: "Dafydd Copeland", role: "Member"},
    {name: "Leighton Cabrera", role: "Member"},
    {name: "Bartosz Marsh", role: "Member"},
    {name: "Frazer Gregory", role: "Member"},
    {name: "Wilfred Shaffer", role: "Member"},
    {name: "Gene Whitney", role: "Admin"},
    {name: "Kareem Cannon", role: "Member"}
]

const NotificationsPopupGroup = ({ onClose }) => {
  return (
   <div className="popup-box">
      {/* Close button with image */}
      
      <img className="closeimg" src={closeIcon} alt="Close" onClick={onClose} />
      <h3 className='pop-up-title'>New Fish Group</h3>
      <h5>Current Members</h5>
      <div className='members-list'>
        {group_members.map((member, index) => (
            <li key={index}>{member.name}, {member.role}</li>
        ))};
      </div>
      <button id="popup-accept-button">Accept</button>
      <button id="popup-decline-button">Decline</button>
    </div>
  );
};

export default NotificationsPopupGroup;