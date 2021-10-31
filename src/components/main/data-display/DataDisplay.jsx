import React, { Component } from 'react';

import styled from 'styled-components';
import Graph from './Graph';

import Graphs from './Graphs';
import Numbers from './Numbers';

export default class DataDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dispType: 'graphs',
      whatthefuck: true,
    }

    this.containerRef = null;

    this.setContainerRef = (element) => {
      this.containerRef = element;
    }

    this.updateWidth = () => {
      if (this.containerRef) {
        this.content = <Graphs viewState={this.props.viewState} width={this.containerRef.clientWidth - 16} />;
        this.setState({ whatthefuck: true });
      }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    return(
      <Container ref={this.setContainerRef} onClick={() => console.log(this.containerRef)}>
        {this.content}
      </Container>
    );
  }
}

const Container = styled.div`
  width: calc(100% + 16px);
  border: 1px solid #818181;
  border-radius: 9px;
  padding: 8px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar-thumb {
    background-color: #dadce0;
    border: 4px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;  
  }
  
  ::-webkit-scrollbar {
    width: 16px;
  }
`;