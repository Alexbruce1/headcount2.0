import React from 'react';

import PropTypes from 'prop-types';
const DistrictCard = ({ location, years }) => {

  return (
    <div className="card">
      <h5 className="card-title" >
        {location}
      </h5>
      <ul className="card-list">
        <li>{years}</li>
      </ul>
    </div>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  years: PropTypes.object.isRequired
};

export default DistrictCard;