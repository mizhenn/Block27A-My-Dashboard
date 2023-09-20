
import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} onClick={toggleSidebar}>
      <h1>Sidebar</h1>
    </div>
  );
}

export default Sidebar;
