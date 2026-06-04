// Code PasswordInput Component Here
import React from 'react';

function PasswordInput() {
  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input 
        type="password" 
        onChange={handleChange} 
        placeholder="Enter your password"
      />
    </div>
  );
}

export default PasswordInput;