import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GrMenu, GrInspect } from 'react-icons/gr';
import './index.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x).slice(2);

  const decodeHTMLEntities = (text) => {
    const decodedText = decodeURIComponent(text.replace(/\+/g, ' '));
    return decodedText;
  };

  return (
    <nav className="wd-breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb wd-breadcrumb-navigation">
        <GrMenu />
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const parsedName = decodeHTMLEntities(name);
          return isLast ? (
            <li key={parsedName} className="breadcrumb-item active" aria-current="page">
              {parsedName}
            </li>
          ) : (
            <li key={parsedName} className="breadcrumb-item wd-breadcrumb-item">
              <Link to={routeTo}>{parsedName}</Link>
            </li>
          );
        })}
      </ol>
      <button className='wd-student-view'>
        <GrInspect />&nbsp;&nbsp;Student View
      </button>
    </nav>
  );
};

export default Breadcrumb;
