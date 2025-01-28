// src/components/ui/Button.js
import React from 'react';
import './style.css';

const Button = ({ children, onClick, className, disabled, variant = "default" }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} button ${variant === "default" ? "button-default" : variant === "outline" ? "button-outline" : "button-destructive"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; // Default export
