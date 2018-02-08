import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PageLoad from './PageLoad';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isView: true
    };
    this.handlerIsView = this.handlerIsView.bind(this);
  }

  handlerIsView() {
    this.setState({
      isView: !this.state.isView
    });
  }

  render() {
    const { dataArray, complete, work } = this.props.botData;
    // console.log(this.props.botData);
    return (
      <div className="progress">
        {work ? <PageLoad /> : (
            <div>
              {dataArray.length} members found. {complete} complete members (has company info)
            </div>
          )
        }
      </div>
    );
  }
}

Progress.defaultProps = {
  botData: []
};

Progress.propTypes = {
  botData: PropTypes.array
};

function mapStateToProps(state) {
  // console.log('listState', state.botData);
  return {
    botData: state.botData
  };
}

export default connect(mapStateToProps)(Progress);