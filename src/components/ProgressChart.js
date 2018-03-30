import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class ProgressChart extends Component {
  state = {};

  dataForSection = (section, forLabel) => {
    const { data } = this.props;
    if (data) {
      const results = data[+section - 1].section;
      const percentage = results.correct / results.total * 100;
      console.log(percentage);
      if (forLabel) {
        console.log(percentage);
        if (percentage === 0) return '';
        return `${percentage}%`;
      }
      return percentage / 5;
    }
  };

  render() {
    return (
      <div className="progress-div">
        <h3>{this.props.label}</h3>
        <div>
          <ProgressBar className="progress-color">
            <ProgressBar
              active
              now={this.dataForSection(1, false)}
              label={`${this.dataForSection(1, true)}`}
              key={1}
            />
            <ProgressBar
              active
              bsStyle="success"
              now={this.dataForSection(2, false)}
              label={`${this.dataForSection(2, true)}`}
              key={2}
            />
            <ProgressBar
              active
              striped
              bsStyle="warning"
              now={this.dataForSection(3, false)}
              label={`${this.dataForSection(3, true)}`}
              key={3}
            />
            <ProgressBar
              active
              bsStyle="danger"
              now={this.dataForSection(4, false)}
              label={`${this.dataForSection(4, true)}`}
              key={4}
            />
            <ProgressBar
              active
              bsStyle="info"
              now={this.dataForSection(5, false)}
              label={`${this.dataForSection(5, true)}`}
              key={5}
            />
          </ProgressBar>
        </div>;
      </div>
    );
  }
}

export default ProgressChart;
