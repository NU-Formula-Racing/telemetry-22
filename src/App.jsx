import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { w3cwebsocket as W3WebSocket } from 'websocket';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

import { Context } from './components/shared/Context';

export default class App extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {
      isLive: false,
      currentSensors: [],
      sessionName: '',
      socketURL: 'ws://localhost:42069',
      connected: false,
    };

    this.client = new W3WebSocket(this.state.socketURL, "echo-protocol");
  }

  handleMouseDown = (e) => {
    this.context.setMouseCoords(e.clientX, e.clientY);
    this.context.setDragging(true);
  }

  handleMouseUp = (e) => {
    this.context.setMouseCoords(e.clientX, e.clientY);
    this.context.setDragging(false);
  }

  componentDidMount() {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    }

    this.client.onmessage = (mes) => {
      console.log(mes);
    }
  }

  render() {
    return (
      <div onMouseDown={(e) => {this.handleMouseDown(e)}} onMouseUp={(e) => {this.handleMouseUp(e)}}>
        <GlobalStyle />
        <Sidebar
          isLive={this.state.isLive}
          setIsLive={(next) => this.setState({ isLive: next })}
          currentSensors={this.state.currentSensors}
          setCurrentSensors={(newState) => this.setState({ currentSensors: newState })}
          setSessionName={(newState) => this.setState({ sessionName: newState })}
          setSocketURL={(url) => this.setState({ socketURL: `ws://${url}:42069` })}
          connected={this.state.connected}
        />
        <Main
          isLive={this.state.isLive}
          currentSensors={this.state.currentSensors}
          setCurrentSensors={(newState) => this.setState({ currentSensors: newState })}
        />
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;