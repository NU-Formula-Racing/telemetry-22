import React, { Component } from 'react';

import styled from 'styled-components';

import NumGraphToggle from './NumGraphToggle';
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
        this.content = (this.state.dispType==='graphs')
          ? <Graphs sensors={props.sensors} viewState={this.props.viewState} width={this.containerRef.clientWidth - 16} />
          : <Numbers sensors={props.sensors} viewState={this.props.viewState} />;
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
      <Container ref={this.setContainerRef}>
        <NumGraphToggle
          dispType={this.state.dispType}
          setDispType={(x) => this.setState({ dispType: x })}
        />
        {(this.props.sensors && this.props.sensors.length > 0)
          ? this.state.dispType==='graphs'
            ? <Graphs
                sensors={this.props.sensors}
                viewState={this.props.viewState}
                width={this.containerRef ? this.containerRef.clientWidth - 16 : 0}
              />
            : <Numbers
                sensors={this.props.sensors}
                viewState={this.props.viewState}
              />
          : <>No Selected Sensors</>
        }
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  border: 1px solid #818181;
  border-radius: 9px;
  padding: 8px;
  height: 100%;
  padding-top: 50px;
  overflow-y: scroll;
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