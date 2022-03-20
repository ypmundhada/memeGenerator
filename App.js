import './App.css';
import React from "react";
import Header from './header';
import MemeGenerator from './memeGenerator';

class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }
  render() {
    return(
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
    )
  }
}

export default App;
