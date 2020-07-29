import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="text-center mt-4">
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/ygo-db">HOME</Link>
    </div>
  );
};

export default PageNotFound;
