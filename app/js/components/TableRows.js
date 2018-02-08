import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TableCell, TableRow } from 'material-ui/Table';


const TableRows = ({ viewSettings, botData }) => {
  let t = 0;
  return botData.map((item, index) => {
    if (viewSettings.onlyComplete) {
      if(!item.isComplete) return null;
    }
    return <TableRow key={item.url}>
      <TableCell padding="dense">{++t}</TableCell>
      { viewSettings.firstname ? (
        <TableCell padding="dense">{item.firstName}</TableCell>
      ) :
        null
      }
      { viewSettings.lastname ? (
        <TableCell padding="dense">{item.lastName}</TableCell>
        ) :
        null
      }
      { viewSettings.company ? (
        <TableCell padding="dense">{item.company}</TableCell>
        ) :
        null
      }
      { viewSettings.position ? (
        <TableCell padding="dense">{item.position}</TableCell>
        ) :
        null
      }
      { viewSettings.url ? (
        <TableCell padding="dense">{item.url}</TableCell>
        ) :
        null
      }
    </TableRow>;
  })
};

TableRows.defaultProps = {
  viewSettings: {},
  botData: []
};

TableRows.propTypes = {
  viewSettings: PropTypes.object,
  botData: PropTypes.array
};

function mapStateToProps(state) {
  return {
    userData: state.userData,
    viewSettings: state.viewSettings,
    botData: state.botData.dataArray
  };
}

export default connect(mapStateToProps)(TableRows);