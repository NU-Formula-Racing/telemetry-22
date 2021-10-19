import React, { Component } from 'react';

const Context = React.createContext(null);
const ContextConsumer = Context.Consumer;

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLive: false,
      setIsLive: () => {
        this.setState({ isLive: !this.state.isLive });
      },
    };
  }

  render() {
    return(
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, ContextProvider, ContextConsumer };