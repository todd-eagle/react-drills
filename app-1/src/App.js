import React, {Component} from 'react';

export default class App1 extends Component {
 constructor(){
  super()
  this.state = {
    userInput : ''
  }

 }
 textHandler(val) {
   this.setState({userInput: val})

 }

 render(){
   return(
      <div className="App">
        <input onChange={(e) => this.textHandler(e.target.value)}/>
   <span>{this.state.userInput}</span>
      </div>

   )
 }
}