import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <div key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
