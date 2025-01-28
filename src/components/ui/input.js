// src/components/ui/Input.js
import React from 'react';
import './style.css'; // Import the CSS file

export const Input = ({ name, value, onChange, placeholder, type = "text", required, className }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      required={required}
      className={`${className} input`}
    />
  );
};
