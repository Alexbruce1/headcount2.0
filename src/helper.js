import React, { Component } from 'react';

class DistrictRepository extends Component {
  constructor(kindergartners) {
    super(kindergartners);
    this.kindergartners = kindergartners;
    this.stats = this.statsReduce();
  }
  
  statsReduce = () => {
    return this.kindergartners.reduce((acc, currentData) => {
      if (!acc[currentData.Location]) {
        if (typeof (currentData.Data) !== 'string') {
          acc[currentData.Location] = { [currentData.TimeFrame]: Math.round(currentData.Data * 1000) / 1000 };
        } else {
          acc[currentData.Location] = { [currentData.TimeFrame]: 0 };
        }
      } else {
        if (typeof (currentData.Data) !== 'string') {
          acc[currentData.Location] = {
            ...acc[currentData.Location],
            [currentData.TimeFrame.toString()]: Math.round(currentData.Data * 1000) / 1000 };
        } else {
          acc[currentData.Location] = {
            ...acc[currentData.Location],
            [currentData.TimeFrame.toString()]: 0 
          };
        }
      }
      return acc;
    }, {});
  }

  findByName = name => {
    if (!name) {
      return undefined;
    } else {
      let uppercaseName = name.toUpperCase();
      let statKeys = Object.keys(this.stats);

      let foundData = statKeys.reduce((foundItem, districtKey) => {
        if (districtKey.toUpperCase() === uppercaseName) {
          foundItem.location = districtKey.toUpperCase();
          foundItem.stats = Object.assign({ ...this.stats[districtKey] }, {});
        }
        return foundItem;
      }, {});


      if (Object.keys(foundData).length) {
        return foundData;
      } else {
        return undefined;
      }
    }
  }

  findAllMatches = keyword => {
    let allMatches = [];
    const statKeys = Object.keys(this.stats);

    if (!keyword) {
      statKeys.forEach(stat => {
        allMatches.push(stat);
      });
      return allMatches;
    } else {
      let uppercaseWord = keyword.toUpperCase();
      return statKeys.reduce((acc, currentData) => {
        if (currentData.toUpperCase().includes(uppercaseWord)) {
          acc.push(currentData);
        }
        return acc;
      }, []);
    }
  }
}

export default DistrictRepository;