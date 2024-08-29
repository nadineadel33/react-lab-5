import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Oops! Page not found.</h1>
      <p>Redirecting you to the homepage...</p>
    </div>
  );
};

export default PageNotFound;
