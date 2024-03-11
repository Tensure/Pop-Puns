import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const MyComponent = () => {
  useEffect(() => {
    // Clear the existing HTML content
    document.body.innerHTML = '<div id="app"></div>';

    // Render your React component instead
    const root = createRoot(document.getElementById('app'));
    root.render(<h1>Hello, world</h1>);
  }, []); // Empty dependency array ensures the effect runs only once after component mount

  return null; // Return null as this component doesn't render anything
};

export default MyComponent;