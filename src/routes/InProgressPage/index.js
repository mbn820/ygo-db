import React from 'react';
import { Link } from 'react-router-dom';

const InProgressPage = () => {
  return (
    <div className="text-center mt-4 vh-100">
      <h2>In Progress</h2>
      <p>Coming Soon</p>
      <Link to="/ygo-db">HOME</Link>
    </div>
  );
};

export default InProgressPage;
