import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class ProgressChart extends Component {
  dataForSection = (section, forLabel) => {
    const { data } = this.props;
    if (!data) {
      return;
    }
    const results = data[+section - 1].section;
    const percentage = results.weight / results.sectionWeight * 100;
    console.log(percentage);
    if (forLabel) {
      const percentageLabel = Math.round(results.correct / results.total * 100);
      if (percentageLabel === 0) return '';
      return `${percentageLabel}%`;
    }
    return results.weight;
  };

  getOverallTotal = () => {
    const { data } = this.props;
    if (data) {
      const results = data[0].section;
      return results.totalWeight;
    }
    return 0;
  };

  getTeamPoints = () => {
    const { data } = this.props;
    if (!data) {
      return;
    }
    let total = 0;

    console.log('Team Points: ', data);
    for (let section of data) {
      console.log(section);
      total += section.section.weight;
    }
    return total;
  };

  render() {
    this.getTeamPoints();
    return (
      <div className="progress-div">
        <h3>{this.props.label}</h3>
        <h5 className="no-new-line">Points: {this.getTeamPoints()}</h5>
        <div>
          <ProgressBar className="progress-color">
            <ProgressBar
              active
              now={this.dataForSection(1, false)}
              label={`${this.dataForSection(1, true)}`}
              key={1}
              max={this.getOverallTotal()}
            />
            <ProgressBar
              active
              bsStyle="success"
              now={this.dataForSection(2, false)}
              label={`${this.dataForSection(2, true)}`}
              key={2}
              max={this.getOverallTotal()}
            />
            <ProgressBar
              active
              striped
              bsStyle="warning"
              now={this.dataForSection(3, false)}
              label={`${this.dataForSection(3, true)}`}
              key={3}
              max={this.getOverallTotal()}
            />
            <ProgressBar
              active
              bsStyle="danger"
              now={this.dataForSection(4, false)}
              label={`${this.dataForSection(4, true)}`}
              key={4}
              max={this.getOverallTotal()}
            />
            <ProgressBar
              active
              bsStyle="info"
              now={this.dataForSection(5, false)}
              label={`${this.dataForSection(5, true)}`}
              key={5}
              max={this.getOverallTotal()}
            />
          </ProgressBar>
        </div>;
      </div>
    );
  }
}

export default ProgressChart;
