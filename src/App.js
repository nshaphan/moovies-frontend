import React, { Component} from "react";
import Greetings from './components/Greetings'
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Greetings />
      </div>
    );
  }
}

export default App;