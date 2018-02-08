import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Collapse extends Component {
  render() {
    return (
      <div className="collapse">
        <div
          className="collapse__title"
          onClick={this.props.handlerCollapse}>
          Facebook data
        </div>
        <div className="collapse__drag">drag me</div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  handlerCollapse: false
};

Collapse.propTypes = {
  handlerCollapse: PropTypes.func
};