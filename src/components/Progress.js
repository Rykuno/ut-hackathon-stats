import React, { Component } from 'react';
import { ProgressBar, Label, Button } from 'react-bootstrap';
import ProgressChart from './ProgressChart';
import * as HackathonAPI from '../utils/HackathonAPI';

class Progress extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.getProgressData();
    setInterval(() => {
      this.getProgressData();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getProgressData = () => {
    console.log('Getting data');
    HackathonAPI.getTeamProgress()
      .then(data => {
        this.setState({
          data
        });
      })
      .catch(e => {});
  };

  dataForTeam = team => {
    const teamKey = 'team' + team.toString();
    if (this.state.data.stats) {
      return this.state.data.stats[+team - 1][teamKey];
    }
  };

  render() {
    return (
      <div>
        <div className="center-content">
          <h3 className="no-new-line">
            <Label bsStyle="primary">Section 1</Label>
          </h3>
          <h3 className="no-new-line">
            <Label bsStyle="success" className="label-spaceing">
              Section 2
            </Label>
          </h3>
          <h3 className="no-new-line">
            <Label bsStyle="warning" className="label-spaceing">
              Section 3
            </Label>
          </h3>
          <h3 className="no-new-line">
            <Label bsStyle="danger" className="label-spaceing">
              Section 4
            </Label>
          </h3>
          <h3 className="no-new-line">
            <Label bsStyle="info" className="label-spaceing">
              Section 5
            </Label>
          </h3>
        </div>;
        <ProgressChart team={1} data={this.dataForTeam(1)} label="Team 1" />
        <ProgressChart team={2} data={this.dataForTeam(2)} label="Team 2" />
        <ProgressChart team={3} data={this.dataForTeam(3)} label="Team 3" />
        <ProgressChart team={4} data={this.dataForTeam(4)} label="Team 4" />
        <ProgressChart team={5} data={this.dataForTeam(5)} label="Team 5" />
      </div>
    );
  }
}

export default Progress;
