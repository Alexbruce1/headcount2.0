import React from 'react';

import PropTypes from 'prop-types';
const DistrictCard = ({ key, location, years }) => {
  const list = Object.keys(years).map(year => {
    return <li className="card-li" key={key}>{
      <div className="li-inner-div" >
        <p className="li-inner-p-left" >{ year }: </p>
        <p className="li-inner-p-right" > { years[year] }</p>
      </div>
    }</li>;
  });

  return (
    <div className="card">
      <h5 className="card-title" >
        {location}
      </h5>
      <ul className="card-list">
        { list }
      </ul>
    </div>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  years: PropTypes.object.isRequired,
  key: PropTypes.number.isRequired
};

export default DistrictCard;