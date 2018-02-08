import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import $ from 'jquery';

class BotManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnStartDisabled: false,
      btnStopDisabled: true,
      parseError: false,
      isEnglish: true
    };
    this.handlerBtnStart = this.handlerBtnStart.bind(this);
    this.handlerBtnStop = this.handlerBtnStop.bind(this);
  }

  handlerBtnStart() {
    if ($('div._3qcu._cy7 a._2s25').text().trim() !== 'Home') {
      this.setState({
        isEnglish: false
      });
    } else if((/facebook.com\/groups\//.test(document.URL) && /members/.test(document.URL))
      || /facebook.com\/search/.test(document.URL)) {
      this.props.startWork();
      this.setState({
        btnStartDisabled: !this.state.btnStartDisabled,
        btnStopDisabled: !this.state.btnStopDisabled,
        parseError: false,
        isEnglish: true
      });
    } else {
      this.setState({
        parseError: true,
        isEnglish: true
      });
    }
  }

  handlerBtnStop() {
    this.props.endWork();
    this.setState({
      btnStartDisabled: !this.state.btnStartDisabled,
      btnStopDisabled: !this.state.btnStopDisabled
    })
  }

  render() {
    // debugger;
    // console.log(this.props);
    let trial = null;
    if (this.props.trial) {
      trial = <div className="trial">Trial version(max 300 people)</div>
    }
    let element = null;
    if (this.state.parseError) {
      element = <div className="start-error">
        Make sure you are on the Members or Friends section of a Facebook Group or Page Likers.
        <br/>
        Like this: "facebook.com/groups/GROUP_NAME/members".
      </div>
    }
    let english = null;
    if (!this.state.isEnglish) {
      english = <div className="start-fb-english">
        Make sure you are using Facebook in English. <br/>
        <a href="https://www.facebook.com/settings?tab=language">
          Click here to go to language settings
        </a>
      </div>
    }
    return (
      <div>
        <div className="botmanage">
          <div className="botmanage__control">
            <Button
              raised="true"
              disabled={this.state.btnStartDisabled}
              color="primary"
              className="btn-start"
              onClick={() => {
                console.log('start');
                this.handlerBtnStart();
              }
            }>
            start
            </Button>
            <Button
            raised="true"
            color="secondary"
            disabled={this.state.btnStopDisabled}
            className="btn-stop"
            onClick={() => {
              console.log('end work');
              return this.handlerBtnStop();
            }
          }>stop</Button>
          </div>
          <div className="botmanage__download">
            <Button
              raised="true"
              color="secondary"
              className="btn-download"
              onClick={() => {
                console.log('end work');
                return this.props.downloadCSV();
              }
            }>
              download csv
            </Button>
          </div>
        </div>
        {trial}
        {element}
        {english}
      </div>
    );
  }
}

BotManage.defaultProps = {
  startWork: false,
  endWork: false,
  downloadCSV: false,
  trial: false
};

BotManage.propTypes = {
  startWork: PropTypes.func,
  endWork: PropTypes.func,
  downloadCSV: PropTypes.func,
  trial: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    trial: state.trial
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startWork() {
      dispatch({ type: 'START_PARSE' });
    },
    endWork() {
      dispatch({ type: 'STOP_PARSE' });
    },
    downloadCSV() {
      dispatch({ type: 'DOWNLOAD_CSV' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BotManage);