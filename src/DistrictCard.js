import React from 'react';

import PropTypes from 'prop-types';
const DistrictCard = ({ key, location, years }) => {
  const list = Object.keys(years).map(year => {
    return <li className="card-li" key={key}>{
      `${year}: ${years[year]}`
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