import React, {Component} from 'react';
import './App.css';

class App3 extends Component{
  constructor(){
    super()
    this.state={
      animals: ['giraffe', 'lion', 'wildebeest', 'gazelle', 'vulture'], 
      userInput: ''
    }
  }
  textHandler(val){
    this.setState({userInput: val})
  }

  render(){
    let animalList = this.state.animals.filter(element => element.includes(this.state.userInput)
    ).map(element=><h2>{element}</h2>)

    return(
      <div className="App">
        <input onChange={(e)=> this.textHandler(e.target.value)}></input>
      <h2>{animalList}</h2>
      </div>
    )
  }
}

export default App3;
