import React, { Component} from "react";
import "./App.css";
import List from './components/ShoppingList';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <List />
      </div>
    );
  }
}

export default App;