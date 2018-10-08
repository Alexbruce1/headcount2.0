import React, { Component } from 'react';

import './App.css';
import CardContainer from './CardContainer';
import kindergartnerData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';


class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: new DistrictRepository(kindergartnerData)
    };
  }

  render() {
    const { districts } = this.state;
    return (
      <div>
        <h1 className="page-title" >
          HeadCount<strong>2.0</strong>
        </h1>
        <CardContainer
          districts={districts.findAllMatches()}
        />
      </div>
    );
  }
}

export default App;
