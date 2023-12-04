import React, { useState, useEffect } from 'react';
import groupsData from '../groups.json'; 
import '../styling/hamburger.css'; // Import the CSS file
import { useAuth } from './authcontext.js';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userData from '../user.json';


const Hamburger = () => {
    const { user } = useAuth();
    const [groups, setGroups] = useState(groupsData.groups.map(group => ({
        ...group,
        color: '#' + Math.floor(Math.random()*16777215).toString(16) // Assign a random color
    })));
    const totalGroups = 10;
    const joinedGroupCount = groups.length;

    const enhancedGroups = groups.map(group => ({
        ...group,
        isOwner: user && user.username === group.owner
    }));

    const handleLeaveGroup = groupId => {
        setGroups(currentGroups => currentGroups.filter(group => group.group_id !== groupId));
    };

    const handleManageGroup = groupId => {
        console.log(`Manage group with ID: ${groupId}`);
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
                        role="button"
                        tabIndex={0}
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
