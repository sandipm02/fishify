import React, { useState, useEffect } from 'react';
import groupsData from '../groups.json'; // Adjust the path as necessary
import '../styling/hamburger.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from './authcontext.js'; 

import userData from '../user.json';

const Hamburger = () => {
    const { user } = useAuth();
    const [groups, setGroups] = useState(groupsData.groups);
    const totalGroups = 10;
    
    const joinedGroupCount = groups.length;

    
    
      // To determine if the logged-in user is the owner of a group, we will enhance the groups data
    // by adding an `isOwner` property to each group
    const enhancedGroups = groups.map(group => ({
    ...group,
    isOwner: user && user.username === group.owner // Make sure to adjust this according to how you store the logged-in user's data
    }));

    const handleLeaveGroup = (groupId) => {
        // Logic to handle leaving a group
        // This will not persist between sessions as it's a front-end only implementation
        setGroups(currentGroups => currentGroups.filter(group => group.group_id !== groupId));
      };

      const handleManageGroup = (groupId) => {
        // Logic to handle managing a group
        console.log(`Manage group with ID: ${groupId}`);
        // You could navigate to a group management page using useNavigate
      };
    

  return (
    <div className="hamburger-container">
    <div className="header">
      <h1 className="title">Joined Groups</h1>
      <div className="group-count">{joinedGroupCount} / {totalGroups} Groups</div>
    </div>

    <div className="groups-list">
      {enhancedGroups.map(group => (
        <div key={group.group_id} className="group-item">
          <div className="group-color-indicator" style={{ backgroundColor: group.color }}></div>
          <span className="group-name">{group.group_name}</span>
          <span 
            className={`group-action-button ${group.isOwner ? 'manage' : 'leave'}`}
            onClick={() => group.isOwner ? handleManageGroup(group.group_id) : handleLeaveGroup(group.group_id)}
            role="button" // Accessibility role
            tabIndex={0} // Make it focusable
          >
            {group.isOwner ? 'Manage' : 'Leave'}
          </span>
        </div>
      ))}
    </div>
    
    <button className="create-group-button">Create Group</button>
  </div>
);
};


export default Hamburger;
