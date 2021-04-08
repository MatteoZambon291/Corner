import React, { Component } from 'react'
import Cards from './components/Cards';
import NavBar from './components/NavBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <>
      <NavBar />
      <Cards />
      </>
    );
  }
}

export default App;