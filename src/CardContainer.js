import React from 'react';

import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const CardContainer = ({ districts }) => {
  const districtCards = districts.map(district => {
    return <DistrictCard 
      key={Date.now()}
      location={district.district}
      years={district.data}
    />;
  });

  return (
    <div className="Card-container" >
      { districtCards }
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.array.isRequired
};

export default CardContainer;