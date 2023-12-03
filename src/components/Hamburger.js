import React, { useState } from 'react';
import groupsData from '../groups.json'; // Adjust the path as necessary
import '../styling/hamburger.css'; // Import the CSS file

const Hamburger = () => {
  const [groups] = useState(groupsData);

  return (
    <div className="hamburger-container">
      <h1 className="hamburger-title">Groups</h1>
      
      {/* Add other menu items or features if needed */}
    </div>
  );
};

export default Hamburger;
