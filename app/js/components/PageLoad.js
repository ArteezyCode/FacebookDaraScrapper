import React, { Component } from 'react';

export default class PageLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.interval = null;
    this.startInerval = this.startInerval.bind(this);
    this.startInerval();
  }

  startInerval() {
    this.interval = setInterval(() => {
      this.setState({
        count: ++this.state.count
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        Page load {this.state.count};
      </div>
    );
  }

  componentWillUnmount() {
    console.log('pageload unmount');
    clearInterval(this.interval);
  }
}
