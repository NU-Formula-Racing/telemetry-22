import React, { Component } from 'react';

const Context = React.createContext(null);
const ContextConsumer = Context.Consumer;

class ContextProvider extends Component{
  constructor(props) {
    super(props);

    this.state = {}
  }
}