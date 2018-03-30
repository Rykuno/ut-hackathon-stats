import React, { Component } from 'react';
import { ProgressBar, Label } from 'react-bootstrap';
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

  dataForTeam(team, teamKey) {
    if (this.state.data.stats) {
      //console.log(this.state.data.stats[+team - 1][teamKey]);
      return this.state.data.stats[+team - 1][teamKey];
    }
  }

  render() {
    return (
      <div>
        <div className="center-content">
          <Label bsStyle="primary" className="label-spaceing">
            Section 1
          </Label>
          <Label bsStyle="success" className="label-spaceing">
            Section 2
          </Label>
          <Label bsStyle="warning" className="label-spaceing">
            Section 3
          </Label>
          <Label bsStyle="danger" className="label-spaceing">
            Section 4
          </Label>
          <Label bsStyle="info" className="label-spaceing">
            Section 5
          </Label>
        </div>;
        <ProgressChart
          team={1}
          data={this.dataForTeam(1, 'team1')}
          label="Team 1"
        />
        <ProgressChart
          team={2}
          data={this.dataForTeam(2, 'team2')}
          label="Team 2"
        />
        <ProgressChart
          team={3}
          data={this.dataForTeam(3, 'team3')}
          label="Team 3"
        />
        <ProgressChart
          team={4}
          data={this.dataForTeam(4, 'team4')}
          label="Team 4"
        />
        <ProgressChart
          team={5}
          data={this.dataForTeam(5, 'team5')}
          label="Team 5"
        />
      </div>
    );
  }
}

export default Progress;
