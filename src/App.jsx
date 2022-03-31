<<<<<<< HEAD
import { Component, useContext } from 'react';
=======
import { useState } from 'react';
>>>>>>> searchbar
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

<<<<<<< HEAD
import { Context } from './components/shared/Context';

export default class App extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {
      isLive: false,
      currentSensors: [],
      sessionName: '',
    }
  }

  handleMouseDown = (e) => {
    this.context.setMouseCoords(e.clientX, e.clientY);
    this.context.setDragging(true);
  }

  handleMouseUp = (e) => {
    this.context.setMouseCoords(e.clientX, e.clientY);
    this.context.setDragging(false);
  }

  render() {
    return (
      <div onMouseDown={(e) => {this.handleMouseDown(e)}} onMouseUp={(e) => {this.handleMouseUp(e)}}>
        <GlobalStyle/>
        <Sidebar
          isLive={this.state.isLive}
          setIsLive={(next) => this.setState({ isLive: next })}
          currentSensors={this.state.currentSensors}
          setCurrentSensors={(newState) => this.setState({ currentSensors: newState })}
          setSessionName={(newState) => this.setState({ sessionName: newState })}
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

/*import styled from 'styled-components';

import { useState, useContext, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

import { Context } from './components/shared/Context';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function App() {
  let context = useContext(Context);

  const forceUpdate = useForceUpdate();

  var [isLive, setIsLive] = useState(false);
  var [currentSensors, setCurrentSensors] = useState([]);
  var [sessionName, setSessionName] = useState('');

  const handleMouseDown = (e) => {
    context.setMouseCoords(e.clientX, e.clientY);
    context.setDragging(true);
  }

  const handleMouseUp = (e) => {
    context.setMouseCoords(e.clientX, e.clientY);
    context.setDragging(false);
  }

  useEffect(() => {
    console.log('WHAT')
  }, [currentSensors])

  return (
    <div onMouseDown={(e) => {handleMouseDown(e)}} onMouseUp={(e) => {handleMouseUp(e)}}>
=======
export default function App() {
  var [isLive, setIsLive] = useState(false);
  var [currentSensors, setCurrentSensors] = useState([]);

  return (
    <>
>>>>>>> searchbar
      <GlobalStyle/>
      <Sidebar
        isLive={isLive} setIsLive={(next) => setIsLive(next)}
        currentSensors={currentSensors} setCurrentSensors={(newState) => setCurrentSensors(newState)}
<<<<<<< HEAD
        setSessionName={(newState) => setSessionName(newState)}
      />
      <Main
        isLive={isLive}
        currentSensors={currentSensors}
        setCurrentSensors={(newState) => setCurrentSensors(newState)}
      />
    </div>
=======
      />
      <Main isLive={isLive} currentSensors={currentSensors} />
    </>
>>>>>>> searchbar
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;*/