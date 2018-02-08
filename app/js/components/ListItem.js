import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import TableRows from './TableRows';

class ListItem extends Component {
  render() {
    const { viewSettings } = this.props;
    if (this.props.botData.length === 0) {
      return null;
    }
    return (
      <div>
        <Table id="mytable">
          <TableHead>
            <TableRow>
              <TableCell padding="dense">number</TableCell>
              { viewSettings.firstname ? (
                <TableCell padding="dense">firstname</TableCell>
                ) :
                null
              }
              { viewSettings.lastname ? (
                <TableCell padding="dense">lastname</TableCell>
                ) :
                null
              }
              { viewSettings.company ? (
                <TableCell padding="dense">company</TableCell>
                ) :
                null
              }
              { viewSettings.position ? (
                <TableCell padding="dense">position</TableCell>
                ) :
                null
              }
              { viewSettings.url ? (
                <TableCell padding="dense">url</TableCell>
                ) :
                null
              }
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRows />
          </TableBody>
        </Table>
      </div>
    );
  }
}


ListItem.defaultProps = {
  viewSettings: {},
  botData: []
};

ListItem.propTypes = {
  viewSettings: PropTypes.object,
  botData: PropTypes.array
};

function mapStateToProps(state) {
  return {
    userData: state.userData,
    viewSettings: state.viewSettings,
    botData: state.botData
  };
}

export default connect(mapStateToProps)(ListItem);