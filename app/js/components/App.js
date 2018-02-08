import React, { Component } from 'react';
import $ from 'jquery';
// import Draggable from 'react-draggable';
import SettingsView from './SettingsView';
import ListItem from './ListItem';
import BotManage from './BotManage';
import Header from './Header';
import Progress from './Progress';
import Collapse from './Collapse';
import Drag from './Dnd';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.handlerCollapse = this.handlerCollapse.bind(this);
    this.handlerClose = this.handlerClose.bind(this);
  }

  handlerCollapse() {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  handlerClose() {
    chrome.storage.sync.set({ 'work': 'notwork' });
    $('#rooot').hide();
  }

  render() {
    return (
      <div id="wrap">
        {this.state.collapse ? (
          <div className="wrapper-collapse">
            <Collapse
              id="drag"
              handlerCollapse={this.handlerCollapse} />
          </div>
        ) : (
          <div id="drag" className="wrapper">
            <Header
              handlerCollapse={this.handlerCollapse}
              handlerClose={this.handlerClose} />
            <Progress />
            <BotManage />
            <SettingsView />
            <ListItem />
          </div>
        )
        }
      </div>
    );
  }

  componentDidMount() {
    Drag(document.getElementById(('rooot')));
  }

}

