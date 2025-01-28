import React from "react";

const ErrorBoundary = ({ error }) => {
  return error ? <div className="text-red-500 mb-4">{error}</div> : null;
};

export default ErrorBoundary;
