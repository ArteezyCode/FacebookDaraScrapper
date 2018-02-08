import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Switch from 'material-ui/Switch';


class SettingsImport extends Component {
  render() {
    const { importSettings } = this.props;
    return (
      <div>
        firstname
        <Switch
          checked={importSettings.firstname}
          onChange={this.props.toggleFirstname} />
        lastname
        <Switch
          checked={importSettings.lastname}
          onChange={this.props.toggleLastname} />
        company
        <Switch
          checked={importSettings.company}
          onChange={this.props.toggleCompany} />
        position
        <Switch
          checked={importSettings.position}
          onChange={this.props.togglePosition} />
        url
        <Switch
          checked={importSettings.url}
          onChange={this.props.toggleUrl} />
        onlyComplete
        <Switch
          checked={importSettings.onlyComplete}
          onChange={this.props.toggleOnlyComplete} />
      </div>
    );
  }
}

SettingsImport.defaultProps = {
  importSettings: {},
  toggleFirstname: false,
  toggleLastname: false,
  toggleCompany: false,
  togglePosition: false,
  toggleUrl: false,
  toggleOnlyComplete: false
};

SettingsImport.propTypes = {
  importSettings: PropTypes.object,
  toggleFirstname: PropTypes.func,
  toggleLastname: PropTypes.func,
  toggleCompany: PropTypes.func,
  togglePosition: PropTypes.func,
  toggleUrl: PropTypes.func,
  toggleOnlyComplete: PropTypes.func
};

function mapStateToProps(state) {
  return {
    importSettings: state.importSettings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFirstname() {
      dispatch({ type: 'IMPORT_TOGGLE_FIRSTNAME' });
    },
    toggleLastname() {
      dispatch({ type: 'IMPORT_TOGGLE_LASTNAME' });
    },
    toggleCompany() {
      dispatch({ type: 'IMPORT_TOGGLE_COMPANY' });
    },
    togglePosition() {
      dispatch({ type: 'IMPORT_TOGGLE_POSITION' });
    },
    toggleUrl() {
      dispatch({ type: 'IMPORT_TOGGLE_URL' });
    },
    toggleOnlyComplete() {
      dispatch({ type: 'IMPORT_TOGGLE_ONLYCOMPLETE' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsImport);
