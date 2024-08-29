import React from 'react';
import { Link } from 'react-router-dom';

const DataFetchError = () => {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>There was an error fetching the data.</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default DataFetchError;
