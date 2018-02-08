import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Button
          raised="true"
          size="small"
          color="secondary"
          onClick={this.props.handlerCollapse}>
         collapse
        </Button>
        <Button
          raised="true"
          className="header__close"
          size="small"
          color="secondary"
          onClick={() => {
            console.log('close');
            this.props.handlerClose();
          }}>
          &#10006;
        </Button>
      </div>
    );
  }
}

Header.defaultProps = {
  handlerCollapse: false,
  handlerClose: false
};

Header.propTypes = {
  handlerCollapse: PropTypes.func,
  handlerClose: PropTypes.func
};