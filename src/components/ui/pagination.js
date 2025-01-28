// src/components/ui/Pagination.js
import React from 'react';
import './style.css'; // Import the CSS file

export const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
  return (
    <div className={`${className} pagination`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
