import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';


class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettings: false
    };
    this.handlerShowSettings = this.handlerShowSettings.bind(this);
  }

  handlerShowSettings() {
    this.setState({
      showSettings: !this.state.showSettings
    })
  }

  render() {
    const { viewSettings } = this.props;
    return (
      <div>
        <Button
          raised
          color="primary"
          className="btn-start"
          onClick={this.handlerShowSettings}
        >
          Settings
        </Button>
        {this.state.showSettings ? (
          <div>
            firstname
            <Switch
              checked={viewSettings.firstname}
              onChange={this.props.toggleFirstname} />
            lastname
            <Switch
              checked={viewSettings.lastname}
              onChange={this.props.toggleLastname} />
            company
            <Switch
              checked={viewSettings.company}
              onChange={this.props.toggleCompany} />
            position
            <Switch
              checked={viewSettings.position}
              onChange={this.props.togglePosition} />
            url
            <Switch
              checked={viewSettings.url}
              onChange={this.props.toggleUrl} />
            onlyComplete
            <Switch
              checked={viewSettings.onlyComplete}
              onChange={this.props.toggleOnlyComplete} />
          </div>
          ) :
          null
        }
      </div>
    );
  }
}

SettingsView.defaultProps = {
  viewSettings: {},
  toggleFirstname: false,
  toggleLastname: false,
  toggleCompany: false,
  togglePosition: false,
  toggleUrl: false,
  toggleOnlyComplete: false
};

SettingsView.propTypes = {
  viewSettings: PropTypes.object,
  toggleFirstname: PropTypes.func,
  toggleLastname: PropTypes.func,
  toggleCompany: PropTypes.func,
  togglePosition: PropTypes.func,
  toggleUrl: PropTypes.func,
  toggleOnlyComplete: PropTypes.func
};

function mapStateToProps(state) {
  return {
    viewSettings: state.viewSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFirstname() {
      dispatch({ type: 'VIEW_TOGGLE_FIRSTNAME' });
    },
    toggleLastname() {
      dispatch({ type: 'VIEW_TOGGLE_LASTNAME' });
    },
    toggleCompany() {
      dispatch({ type: 'VIEW_TOGGLE_COMPANY' });
    },
    togglePosition() {
      dispatch({ type: 'VIEW_TOGGLE_POSITION' });
    },
    toggleUrl() {
      dispatch({ type: 'VIEW_TOGGLE_URL' });
    },
    toggleOnlyComplete() {
      dispatch({ type: 'VIEW_TOGGLE_ONLYCOMPLETE' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
