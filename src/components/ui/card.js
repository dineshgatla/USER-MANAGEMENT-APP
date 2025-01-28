// src/components/ui/Card.js
import React from 'react';
import './style.css'; // Import the CSS file

export const Card = ({ children, className }) => {
  return (
    <div className={`${className} card`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};
