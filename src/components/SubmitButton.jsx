// Code SubmitButton Component Here
import React from 'react';

function SubmitButton() {
  // Task 3: Create handleEnter function
  const handleEnter = () => {
    console.log("Mouse Entering");
  };

  // Task 3: Create handleLeave function
  const handleLeave = () => {
    console.log("Mouse Exiting");
  };

  return (
    <div>
      {/* Task 3: Render button, exact text, and attach mouse events */}
      <button 
        onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave}
      >
        Submit Password
      </button>
    </div>
  );
}

export default SubmitButton;