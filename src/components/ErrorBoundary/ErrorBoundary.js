import React, { useState } from 'react';

const ErrorBoundary = (props) => {
  const [hasError, setError] = useState(false);

  return (
    <div>
      { hasError ? <h1>Something went wrong</h1> : props.children }
    </div>
  );
}

export default ErrorBoundary;

// Wrap ErrorBoundary tags around all other content for it to work